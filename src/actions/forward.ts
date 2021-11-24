import { fetchTokens } from "../credentials/tokens"

export const gmailForward = async (mainParameters: Record<string, any>, lib: any): Promise<any> => {
    const { axios, _ } = lib
    const { itemsFromParent, filesFromParent, credential, pipelineNode } = mainParameters

    let access_token

    ({ access_token } = await fetchTokens(mainParameters, lib, 'refresh_token'))
    
    const { prospectiveTitle, prospectiveContent } = pipelineNode

    const items = itemsFromParent.filter((item: any) => item?.provider?.includes('wordparrot-gmail'))

    if (!items?.length) {
        return {
            tokensToPassOn: [{
                name: 'gmail_access_token',
                value: access_token,
            }]
        }
    }

    const rawMessage = `
    "From: ${pipelineNode.from}\r\n" + 
    "To: ${pipelineNode.to}\r\n" +
    "Subject: ${pipelineNode.subject}\r\n\r\n" +
    "${pipelineNode.prospectiveContent}";
    `

    const encodedMessage = Buffer.from(rawMessage).toString('base64').replace(/\+/g, '-').replace(/\//g, '_')

    const sendResponse = await axios(
        `https://gmail.googleapis.com/gmail/v1/users/${credential.username}/messages/send`,
        {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Accept': 'application/json',
            },
            data: {
                raw: encodedMessage
            }
        }
    )

    return {}
}