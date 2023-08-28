import { getProvider } from '../../src/identity';

export enum CredentialProviders {
  /* 
        Enter credential provider strings here.

    */
  MY_NEW_CREDENTIAL = getProvider('my-new-credential'),
}
