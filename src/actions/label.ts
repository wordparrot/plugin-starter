import { fetchTokens } from "../credentials/tokens"

export const gmailLabel = async (mainParameters: Record<string, any>, lib: any): Promise<any> => {
    const { axios, _ } = lib
    const { itemsFromParent, filesFromParent, credential, pipelineNode } = mainParameters

    let access_token

    ({ access_token } = await fetchTokens(mainParameters, lib, 'refresh_token'))
    
    const { text } = pipelineNode

    const items = itemsFromParent.filter((item: any) => item?.provider?.includes('wordparrot-gmail'))

    if (!items?.length) {
        return {
            tokensToPassOn: [{
                name: 'gmail_access_token',
                value: access_token,
            }]
        }
    }

    // First get all labels for this account.
    let labelResponse

    try {
        labelResponse = await axios(
            `https://gmail.googleapis.com/gmail/v1/users/${credential.username}/labels`,
            {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Accept': 'application/json',
                },
            }
        )
    } catch (e) {
        throw new Error('actions-label-connection_error')
    }

    const labels = labelResponse.data.labels

    let matchingLabel

    matchingLabel = _.find(labels, (label: any) => label?.name === text)

    if (!matchingLabel) {
        // We don't have a label with that text yet, so make one now.
        const createLabelResponse = await axios(
            `https://gmail.googleapis.com/gmail/v1/users/${credential.username}/labels`,
            {
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Accept': 'application/json',
                },
                data: {
                    "name": text,
                    "messageListVisibility": "show",
                    "labelListVisibility": "labelShow",
                    "color": {
                        "textColor": pipelineNode.color,
                        "backgroundColor": pipelineNode.background,
                    }
                }
            }
        )
        .catch((e: any) => {
            throw new Error('actions-label-creation_error')
        })
        matchingLabel = createLabelResponse.data
    }

    if (matchingLabel) {
        console.log({
            ids: items.map((item: any) => item?.uniqId),
            addLabelIds: [
                matchingLabel?.id,
            ]
        })

        const batchModifyResponse = await axios(
            `https://gmail.googleapis.com/gmail/v1/users/${credential.username}/messages/batchModify`,
            {
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Accept': 'application/json',
                },
                data: {
                    ids: items.map((item: any) => item?.uniqId),
                    addLabelIds: [
                        matchingLabel?.id,
                    ]
                }
            }
        )
        .then((response: any) => {
            if (response.status >= 300) {
                throw new Error('request failed')
            }
            return response.data
        })
        .catch((e: any) => {
            console.log(e)
            throw new Error('actions-label-update_error')
        })
    }

    return {
        tokensToPassOn: [{
            name: 'gmail_access_token',
            value: access_token,
        }]
    }
}