import { Params, CredentialReturnValue, AuthCallbackStatus } from 'wordparrot-types';

export const sampleCredential = async (params: Params): CredentialReturnValue => {
  const status: AuthCallbackStatus = 'valid';

  return {
    status,
  };
};
