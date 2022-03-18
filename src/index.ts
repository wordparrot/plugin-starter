import mainModuleFactory from './main'

const {actions, listeners, credentials} = mainModuleFactory()

export default function sandboxModule() {
    return {actions, listeners, credentials}
}