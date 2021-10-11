// eslint-disable-next-line @typescript-eslint/no-empty-function
export const sampleAuthCallback = async (config: any, lib: any) => {

}

export const gmailRefreshToken = async (config: any, lib: any) => {
    const { axios } = lib
    const { credential, redirectURI } = config.mainParameters
    const params = {
        client_id: credential.providerId,
        client_secret: credential.providerSecret,
        code: credential.providerAuthResponse,
        grant_type: credential.grantType,
        redirect_uri: redirectURI,
    }

    // https://oauth2.googleapis.com/token
    // Required: client_id, client_secret, code, grant_type, redirect_uri
    // Content-Type x-www-form-urlencoded
    const response: Record<string, unknown> = await axios.get(
        'https://oauth2.googleapis.com/token',
        {
            params,
        }
    )
    .then((axiosResponse: any) => {
        const { access_token, refresh_token } = axiosResponse.data
        return {
            access_token,
            refresh_token,
        }
    })

    const result: Record<string, unknown> = {}

    if (response.access_token) {
        result.providerToken = response.access_token
    }
    if (response.refresh_token) {
        result.providerRefreshToken = JSON.stringify(response.refresh_token)
    }
 
    return result
}