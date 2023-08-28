import { getProvider } from '../identity';

export enum ActionProviders {
  /* 
    Enter action provider strings here.
  */
  SAMPLE_ACTION = getProvider('sample-action'),
  SAMPLE_WRAPPED_ACTION = getProvider('sample-wrapped-action'),
}
