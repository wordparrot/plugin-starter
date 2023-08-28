import { DynamicServiceBody, ActionReturnValue, ActionReturnFunction } from 'wordparrot-types';
import { SandboxLib } from 'wordparrot-types-backend';

export const sampleAction = async (body: DynamicServiceBody, lib: SandboxLib): ActionReturnValue => {
  return {
    message: 'test_succeeded',
    itemsToPassOn: [],
    tokensToPassOn: [],
  };
};

interface ExampleActionParameters {
  a: string;
  b: string[];
}

const wrappedActionFunction: ActionReturnFunction<ExampleActionParameters> = async (
  body: DynamicServiceBody,
  lib: SandboxLib,
  config: ExampleActionParameters
) => {
  return {
    message: 'test_succeeded',
    itemsToPassOn: [],
    tokensToPassOn: [],
  };
};

export const sampleActionWrappedFunction = async (body: DynamicServiceBody, lib: SandboxLib): ActionReturnValue => {
  return wrappedActionFunction(body, lib, {
    a: 'value',
    b: ['value'],
  });
};
