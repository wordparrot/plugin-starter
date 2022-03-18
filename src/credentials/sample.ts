import { DynamicServiceBody, CredentialReturnValue, SandboxLib } from 'wordparrot-types'

export const sampleCredential = async (body: DynamicServiceBody, lib: SandboxLib): CredentialReturnValue => {
    return {
        result: true,
        data: {
            output: {
            }
        }
    }
}