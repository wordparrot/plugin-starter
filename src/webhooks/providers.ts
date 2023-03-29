import { getProvider } from '../identity';

export enum WebhookProviders {
  /* 
        Enter webhook provider strings here.

    */
  MY_NEW_WEBHOOK = getProvider('my-new-webhook'),
}
