import { PluginFormConfiguration } from 'wordparrot-types';

import { ActionProviders } from '../actions/providers';
import { CredentialProviders } from '../credentials/providers';
import { ListenerProviders } from '../listeners/providers';
import { WebhookProviders } from '../webhooks/providers';

const Form: PluginFormConfiguration<ActionProviders, CredentialProviders, ListenerProviders, WebhookProviders> = {
  actions: [
    /* 
    Enter your action form configuration here. You'll need to register the provider name in ./providers.ts
    {
      name: 'My New Action (This is how users will see your action)',
      description: 'Describe in one sentence what it does...',
      provider: ActionProviders.MY_NEW_ACTION,
      type: 'plugin',
      initialValues: {
        title: '',
        content: '',
        provider: ActionProviders.MY_NEW_ACTION,
        status: 'ok',
        type: 'PLUGIN',
        values: {},
      },
      fields: [

      ],
      validationSchema: [

      ],
    } 
    */
  ],
  credentials: [],
  listeners: [],
  webhooks: [],
  blueprints: [],
};

export default Form;
