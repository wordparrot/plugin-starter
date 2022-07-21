import { 
    ActionRegister, 
    ActionRegisterItem,
    CredentialRegister,
    CredentialRegisterItem,
    ListenerRegister,
    ListenerRegisterItem,
    WebhookRegister,
    WebhookRegisterItem,
} from 'wordparrot-types'

export const registerActions: ActionRegister = <T>(actionsArray: ActionRegisterItem<T>[]) => {
    const obj: any = {}
    return actionsArray.reduce((accumulator, counter) => {
        accumulator[counter.provider] = counter.methods
        return accumulator
    }, obj)
}

export const registerCredentials: CredentialRegister = <T>(credentialsArray: CredentialRegisterItem<T>[]) => {
    const obj: any = {}
    return credentialsArray.reduce((accumulator, counter) => {
        accumulator[counter.provider] = counter.methods
        return accumulator
    }, obj)
}

export const registerListeners: ListenerRegister = <T>(listenersArray: ListenerRegisterItem<T>[]) => {
    const obj: any = {}
    return listenersArray.reduce((accumulator, counter) => {
        accumulator[counter.provider] = counter.methods
        return accumulator
    }, obj)
}

export const registerWebhooks: WebhookRegister = <T>(webhooksArray: WebhookRegisterItem<T>[]) => {
    const obj: any = {}
    return webhooksArray.reduce((accumulator, counter) => {
        accumulator[counter.provider] = counter.methods
        return accumulator
    }, obj)
}