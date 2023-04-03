import { DynamicServiceBody, ListenerReturnValue } from 'wordparrot-types';
import { SandboxLib } from 'wordparrot-types-backend';

export const sampleListener = async (body: DynamicServiceBody, lib: SandboxLib): ListenerReturnValue => {
  return {
    passEvent: true,
  };
};
