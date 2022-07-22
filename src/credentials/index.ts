import { CredentialRegister } from 'wordparrot-types';

import { registerCredentials } from '../register';
import { CredentialProviders } from './providers';

export const credentials: CredentialRegister = () =>
  registerCredentials<CredentialProviders>([
    /* 
    Enter your credentials here. You'll need to register the provider name in ./providers.ts
    {
      provider: 'my-profile.my-plugin.my-plugin-credential-registration',
      methods: {
          authCallback: myAuthCallback,
          test: myAuthTest,
      }
    } 
    */
  ]);
