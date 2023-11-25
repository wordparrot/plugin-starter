import { ActionReturnValue, Params } from 'wordparrot-types';

export const sampleAction = async (params: Params): ActionReturnValue => {
  return {
    message: 'test_succeeded',
    itemsToPassOn: [],
    tokensToPassOn: [],
  };
};
