import moduleIndex from './main'

const {actions, listeners, credentials} = moduleIndex()

export default function sandboxModule() {
    return {actions, listeners, credentials}
}