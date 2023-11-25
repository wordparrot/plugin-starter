import { WebhookFactory } from 'wordparrot-types';

import { registerWebhooks } from '../register';
import { WebhookProviders } from './providers';

export const webhooks: WebhookFactory<WebhookProviders> = () =>
  registerWebhooks([
    /* 
    Enter your webhooks here. You'll need to register the provider name in ./providers.ts
    {
      provider: 'my-profile.my-plugin.my-plugin-function',
      methods: {
        main: myWebhook
      }
    }
    */
  ]);
