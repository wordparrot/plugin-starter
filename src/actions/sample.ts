import { DynamicServiceBody, ActionReturnValue } from 'wordparrot-types';
import { SandboxLib } from 'wordparrot-types-backend';

export const sampleAction = async (body: DynamicServiceBody, lib: SandboxLib): ActionReturnValue => {
  return {
    message: 'test_succeeded',
    itemsToPassOn: [],
    tokensToPassOn: [],
  };
};
