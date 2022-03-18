import { 
    PluginMainModule, 
    PluginModuleActionFactory,
    PluginModuleListenerFactory,
    PluginModuleCredentialFactory
} from 'wordparrot-types'

const mainModuleFactory = (): PluginMainModule => {
    const actions: PluginModuleActionFactory = () => {
        return {
            
        }
    }
    
    const listeners: PluginModuleListenerFactory = () => {
        return {}
    }

    const credentials: PluginModuleCredentialFactory = () => {
        return {
            
        }
    }

    return {
        actions,
        listeners,
        credentials,
    }
}

export default mainModuleFactory