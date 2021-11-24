import { fetchTokens } from "./tokens"

export const gmailRefreshToken = async (mainParameters: any, lib: any) => {
    const response = await fetchTokens(mainParameters, lib, 'authorization_code')

    const result: Record<string, unknown> = {}

    if (response.access_token) {
        result.accessToken = response.access_token
        result.tokenType = response.token_type
        result.tokenExpiration = response.expires_in
    }
    if (response.refresh_token) {
        result.refreshToken = response.refresh_token
    }
 
    return result
}