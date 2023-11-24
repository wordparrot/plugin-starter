import { CredentialReturnValue, DynamicServiceBodyWithLib, AuthCallbackStatus } from 'wordparrot-types';

export const sampleCredential = async (body: DynamicServiceBodyWithLib): CredentialReturnValue => {
  const status: AuthCallbackStatus = 'valid';

  return {
    status,
  };
};
