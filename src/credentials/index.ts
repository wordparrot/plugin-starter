import { CredentialFactory } from 'wordparrot-types';

import { registerCredentials } from '@/src/register';
import { CredentialProviders } from '@/src/credentials/providers';

export const credentials: CredentialFactory<CredentialProviders> = () =>
  registerCredentials([
    /* 
    Enter your credentials here. You'll need to register the provider name in ./providers.ts
    {
      provider: CredentialProviders.MY_CREDENTIAL,
      methods: {
        authCallback: myAuthCallback,
        generateAuthURI: myGenerateAuthURI,
        test: myAuthTest,
      }
    } 
    */
  ]);
