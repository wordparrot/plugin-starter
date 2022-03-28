import { DynamicServiceBodyListenerType, ListenerReturnValue, SandboxLib } from 'wordparrot-types'

export const sampleListener = async (body: DynamicServiceBodyListenerType, lib: SandboxLib): ListenerReturnValue => {
    return {
        passEvent: true,
    }
}