import { ActionRegister } from 'wordparrot-types';

import { registerActions } from '../register';
import { ActionProviders } from './providers';

export const actions: ActionRegister = () =>
  registerActions<ActionProviders>([
    /* 
    Enter your actions here. You'll need to register the provider name in ./providers.ts
    {
      provider: 'my-profile.my-plugin.my-plugin-function',
      methods: {
          main: myAction
      }
    } 
    */
  ]);
