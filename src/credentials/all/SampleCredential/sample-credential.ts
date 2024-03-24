import { Body, CredentialReturnValue, AuthCallbackStatus } from 'wordparrot-types';

export const sampleCredential = async (body: Body): CredentialReturnValue => {
  const status: AuthCallbackStatus = 'valid';

  return {
    status,
  };
};
