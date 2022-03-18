import { DynamicServiceBody, ListenerReturnValue, SandboxLib } from 'wordparrot-types'

export const sampleListener = async (body: DynamicServiceBody, lib: SandboxLib): ListenerReturnValue => {
    return {
        passEvent: true,
    }
}