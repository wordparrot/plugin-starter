import mainModuleFactory from './main'

const {actions, listeners, credentials, webhooks} = mainModuleFactory()

export default function sandboxModule() {
    return {actions, listeners, credentials, webhooks}
}