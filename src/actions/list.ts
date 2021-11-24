import { fetchTokens } from "../credentials/tokens"
import { Message, RepositoryItem } from './message.interface'

export const gmailList = async (mainParameters: Record<string, any>, lib: any): Promise<any> => {
    const { axios, FileClass, _ } = lib
    const { credential, pipelineNode, pipelineJobId } = mainParameters

    const { access_token } = await fetchTokens(mainParameters, lib, 'refresh_token')

    const params: Record<string, any> = {}

    if (pipelineNode.search) {
        params.q = pipelineNode.search
    }
    if (pipelineNode.limit) {
        params.maxResults = pipelineNode.limit
    }
    if (pipelineNode.page) {
        params.pageToken = pipelineNode.page
    }

    let listResponse

    try {
        listResponse = await axios(
            `https://gmail.googleapis.com/gmail/v1/users/${credential.username}/messages`,
            {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Accept': 'application/json',
                },
                params,
            }
        )
    } catch (e) {
        throw new Error('actions-list-connection_error')
    }

    const partialMessages = listResponse?.data?.messages || []

    const messages: Message[] = await Promise.all(
        partialMessages.map((message: any) => {
            // list endpoint will only return partial email data.
            return axios(
                `https://gmail.googleapis.com/gmail/v1/users/${credential.username}/messages/${message.id}`,
                {
                    method: 'get',
                    headers: {
                        'Authorization': `Bearer ${access_token}`,
                        'Accept': 'application/json',
                    },
                    params,
                }
            )
            .then((response: any) => response.data)
        })
    ) || []

    const repositoryItems = messages.map((message: Message): RepositoryItem => {
        const subjectHeader = _.find(message.payload.headers, (header: {
            name: string
            value: string
        }) => {
            return header.name === 'Subject'
        })
        return {
            __wpsf_: true,
            nodeUniqId: pipelineNode.id,
            uniqId: message.id,
            collectionId: message.threadId,
            authorScreenName: credential.username,
            title: subjectHeader?.value || '',
            provider: 'wordparrot-gmail',
            platform: 'Gmail',
            content: message.snippet,
            format: message.payload.mimeType,
            originalCreatedAt: new Date(parseInt(message.internalDate)).toISOString(),
        }
    })

    let filesToPassOn: any[] = []

    if (pipelineNode.mode === 'withAttachments') {
        filesToPassOn = _.flatten(await Promise.all(
            messages
            .map((message) => {
                return {
                    messageId: message.id,
                    messagePartsWithAttachment: message.payload.parts.filter((part) => {
                        return part?.body?.attachmentId
                    })
                }
            })
            .filter((messageWrapper) => {
                return messageWrapper.messagePartsWithAttachment?.length > 0
            })
            .map((messageWrapper) => {
                return Promise.all(
                    messageWrapper.messagePartsWithAttachment.map(part => {
                        return axios(
                            `https://gmail.googleapis.com/gmail/v1/users/${credential.username}/messages/${messageWrapper.messageId}/attachments/${part.body.attachmentId}`,
                            {
                                method: 'get',
                                headers: {
                                    'Authorization': `Bearer ${access_token}`,
                                    'Accept': 'application/json',
                                },
                                params,
                            }
                        )
                        .then((response: any) => {
                            if (response.status >= 300) {
                                throw new Error('request failed')
                            }
                            return response.data
                        })
                        .then((bufferObj: any) => {
                            const fileClass = new FileClass({
                                uniqId: part.body.attachmentId || `${pipelineJobId}_${pipelineNode.id}_${part.filename}`,
                                pipelineJobId,
                                pipelineNodeId: pipelineNode.id,
                                filename: part.filename,
                                buffer: bufferObj.data,
                                parentRepositoryItem: {
                                  nodeUniqId: pipelineNode.id,
                                  uniqId: messageWrapper.messageId
                                }
                            })

                            return fileClass.saveToTemp('base64')
                        })
                        .catch((e: any) => {
                            console.log(e)
                        })
                    })
                )
            })
        ))
    }

    if (messages?.length && pipelineNode.action === 'markAsRead') {
        await axios(
            `https://gmail.googleapis.com/gmail/v1/users/${credential.username}/messages/batchModify`,
            {
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Accept': 'application/json',
                },
                data: {
                    "ids": messages.map(message => message.id),
                    "removeLabelIds": [
                        "UNREAD"
                    ]
                }
            }
        )
    }

    return {
        itemsToPassOn: repositoryItems,
        filesToPassOn: filesToPassOn,
        tokensToPassOn: [{
            name: 'gmail_access_token',
            value: access_token,
        }]
    }
}