import { fetchTokens } from "./tokens"

export const gmailTest = async (mainParameters: any, lib: any) => {
    const { axios } = lib
    const { credential } = mainParameters

    try {
        const { access_token } = await fetchTokens(mainParameters, lib, 'refresh_token')

        // Attempt to fetch user's profile basic information.
        await axios(
            `https://gmail.googleapis.com/gmail/v1/users/${credential.username}/profile`,
            {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Accept': 'application/json',
                }
            }
        )

        return {
            accessToken: access_token,
            status: 'verified' 
        }
    } catch (e) {
        console.log(e)
        return { 
            status: 'unverified' 
        }
    }
}