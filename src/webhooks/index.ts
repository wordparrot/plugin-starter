import { WebhookRegister } from 'wordparrot-types'

import { registerWebhooks } from 'register'
import { WebhookProviders } from './providers'

export const webhooks: WebhookRegister = () => {
    return registerWebhooks<WebhookProviders>([
        
    ])
}