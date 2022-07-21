import { ActionProviders } from 'actions/providers'
import { CredentialProviders } from 'credentials/providers'
import { ListenerProviders } from 'listeners/providers'
import { WebhookProviders } from 'webhooks/providers'
import { PluginFormConfiguration } from 'wordparrot-types'

const Form: PluginFormConfiguration<
    ActionProviders,
    CredentialProviders,
    ListenerProviders,
    WebhookProviders
> = {
    actions: [],
    credentials: [],
    listeners: [],
    webhooks: [],
    blueprints: [],
}

export default Form