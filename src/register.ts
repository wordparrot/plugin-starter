import { 
    ActionRegister, 
    ActionRegisterItem,
    ActionReturnMethods,
    CredentialRegister,
    CredentialRegisterItem,
    CredentialReturnMethods,
    ListenerRegister,
    ListenerRegisterItem,
    ListenerReturnMethods,
    WebhookRegister,
    WebhookRegisterItem,
    WebhookReturnMethods,
} from 'wordparrot-types'

export const registerActions: ActionRegister = <T>(actionsArray: ActionRegisterItem<T>[]) => {
    const obj: Record<string, ActionReturnMethods> = {}
    return actionsArray.reduce((accumulator, counter) => {
        const provider = counter.provider as unknown as string
        accumulator[provider] = counter.methods
        return accumulator
    }, obj)
}

export const registerCredentials: CredentialRegister = <T>(credentialsArray: CredentialRegisterItem<T>[]) => {
    const obj: Record<string, CredentialReturnMethods> = {}
    return credentialsArray.reduce((accumulator, counter) => {
        const provider = counter.provider as unknown as string
        accumulator[provider] = counter.methods
        return accumulator
    }, obj)
}

export const registerListeners: ListenerRegister = <T>(listenersArray: ListenerRegisterItem<T>[]) => {
    const obj: Record<string, ListenerReturnMethods> = {}
    return listenersArray.reduce((accumulator, counter) => {
        const provider = counter.provider as unknown as string
        accumulator[provider] = counter.methods
        return accumulator
    }, obj)
}

export const registerWebhooks: WebhookRegister = <T>(webhooksArray: WebhookRegisterItem<T>[]) => {
    const obj: Record<string, WebhookReturnMethods> = {}
    return webhooksArray.reduce((accumulator, counter) => {
        const provider = counter.provider as unknown as string
        accumulator[provider] = counter.methods
        return accumulator
    }, obj)
}