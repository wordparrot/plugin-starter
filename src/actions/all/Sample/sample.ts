import { DynamicServiceBodyWithLib, ActionReturnValue, ActionReturnFunction } from 'wordparrot-types';

export const sampleAction = async (body: DynamicServiceBodyWithLib): ActionReturnValue => {
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
  body: DynamicServiceBodyWithLib,
  config: ExampleActionParameters
) => {
  return {
    message: 'test_succeeded',
    itemsToPassOn: [],
    tokensToPassOn: [],
  };
};

export const sampleActionWrappedFunction = async (body: DynamicServiceBodyWithLib): ActionReturnValue => {
  return wrappedActionFunction(body, {
    a: 'value',
    b: ['value'],
  });
};
