import { CredentialReturnValue, DynamicServiceBody, AuthCallbackStatus } from 'wordparrot-types';
import { SandboxLib } from 'wordparrot-types-backend';

export const sampleCredential = async (body: DynamicServiceBody, lib: SandboxLib): CredentialReturnValue => {
  const status: AuthCallbackStatus = 'valid';

  return {
    status,
  };
};
