import { 
    PluginMainModule,
} from 'wordparrot-types'

import { actions } from './actions'
import { credentials } from './credentials'
import { listeners } from './listeners'
import { webhooks } from './webhooks'

const ModuleFactory = (): PluginMainModule => {    
    return {
        actions,
        listeners,
        credentials,
        webhooks,
    }
}

export default ModuleFactory