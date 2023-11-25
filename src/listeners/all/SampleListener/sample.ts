import { Params, ListenerReturnValue } from 'wordparrot-types';

export const sampleListener = async (params: Params): ListenerReturnValue => {
  return {
    passEvent: true,
  };
};
