import { DynamicServiceBodyWithLib, ListenerReturnValue } from 'wordparrot-types';

export const sampleListener = async (body: DynamicServiceBodyWithLib): ListenerReturnValue => {
  return {
    passEvent: true,
  };
};
