import { ActionReturnValue, Body } from 'wordparrot-types';

export const sampleAction = async (body: Body): ActionReturnValue => {
  return {
    message: 'test_succeeded',
    itemsToPassOn: [],
    tokensToPassOn: [],
  };
};
