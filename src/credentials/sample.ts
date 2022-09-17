import { CredentialReturnValue, SandboxLib, DynamicServiceBody, AuthCallbackStatus } from 'wordparrot-types';

export const sampleCredential = async (body: DynamicServiceBody, lib: SandboxLib): CredentialReturnValue => {
  const status: AuthCallbackStatus = 'valid';

  return {
    status,
  };
};
