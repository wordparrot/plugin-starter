import mainModuleFactory from './main'

const {
    actions,
    credentials,
    listeners, 
    webhooks,
} = mainModuleFactory()

export default function sandboxModule() {
    return { actions, credentials, listeners, webhooks }
}