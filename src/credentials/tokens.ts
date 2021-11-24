export async function fetchTokens(mainParameters: any, lib: any, grant_type: string) {
    const { axios, qs, _ } = lib
    const { credential, tokensFromParent } = mainParameters

    let data

    const matchingToken = _.find(tokensFromParent || [], (token: any) => {
        return token?.name === 'gmail_access_token'
    })

    // Shortcut exit if we have already fetched the token in a previous node.
    if (matchingToken?.value) {
        return { access_token: matchingToken?.value }
    }

    if (grant_type === 'authorization_code') {
        data = qs.stringify({
            client_id: credential?.clientId,
            client_secret: credential?.clientSecret,
            code: credential?.authResponse,
            grant_type,
            redirect_uri: credential?.redirectURI,
        })
    } else {
        data = qs.stringify({
            client_id: credential?.clientId,
            client_secret: credential?.clientSecret,
            grant_type,
            refresh_token: credential?.refreshToken,
        })
    }

    // POST https://oauth2.googleapis.com/token
    // Required: client_id, client_secret, code, grant_type, redirect_uri
    // Content-Type x-www-form-urlencoded
    return axios(
        {
            method: 'post',
            url: 'https://oauth2.googleapis.com/token',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded' 
            },
            data,
        }
    )
    .then((axiosResponse: any) => {
        const { 
            access_token, 
            refresh_token,
            token_type,
            expires_in,
        } = axiosResponse.data

        return {
            access_token,
            refresh_token,
            token_type,
            expires_in,
        }
    })
}