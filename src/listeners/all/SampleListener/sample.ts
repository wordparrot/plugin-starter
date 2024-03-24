import { ListenerReturnValue, Body } from 'wordparrot-types';

export const sampleListener = async (body: Body): ListenerReturnValue => {
  return {
    passEvent: true,
  };
};
