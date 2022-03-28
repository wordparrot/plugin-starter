import { 
    PluginMainModule, 
    PluginModuleActionFactory,
    PluginModuleListenerFactory,
    PluginModuleCredentialFactory,
    PluginModuleWebhookFactory,
} from 'wordparrot-types'

const mainModuleFactory = (): PluginMainModule => {
    const actions: PluginModuleActionFactory = () => {
        return {
            
        }
    }
    
    const listeners: PluginModuleListenerFactory = () => {
        return {
            
        }
    }

    const credentials: PluginModuleCredentialFactory = () => {
        return {
            
        }
    }

    const webhooks: PluginModuleWebhookFactory = () => {
        return {
            
        }
    }

    return {
        actions,
        listeners,
        credentials,
        webhooks,
    }
}

export default mainModuleFactory