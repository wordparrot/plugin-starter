import { ListenerRegister } from 'wordparrot-types';

import { registerListeners } from '../register';
import { ListenerProviders } from './providers';

export const listeners: ListenerRegister = () =>
  registerListeners<ListenerProviders>([
    /* 
    Enter your listeners here. You'll need to register the provider name in ./providers.ts
    {
      provider: 'my-profile.my-plugin.my-plugin-function',
      methods: {
        main: myListener
      }
    } 
    */
  ]);
