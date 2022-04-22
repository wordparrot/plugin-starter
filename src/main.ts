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

    const credentials: PluginModuleCredentialFactory = () => {
        return {
            
        }
    }

    const listeners: PluginModuleListenerFactory = () => {
        return {
            
        }
    }

    const webhooks: PluginModuleWebhookFactory = () => {
        return {
            
        }
    }

    return {
        actions,
        credentials,
        listeners,
        webhooks,
    }
}

export default mainModuleFactory