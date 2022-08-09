import { CredentialRegister } from 'wordparrot-types';

import { registerCredentials } from '../register';
import { CredentialProviders } from './providers';

export const credentials: CredentialRegister = () =>
  registerCredentials<CredentialProviders>([
    /* 
    Enter your credentials here. You'll need to register the provider name in ./providers.ts
    {
      provider: CredentialProviders.MY_CREDENTIAL,
      methods: {
        authCallback: myAuthCallback,
        test: myAuthTest,
      }
    } 
    */
  ]);
