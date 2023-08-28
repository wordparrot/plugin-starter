import { ActionRegister } from 'wordparrot-types';

import { registerActions } from '../register';
import { ActionProviders } from './providers';

import { sampleAction, sampleActionWrappedFunction } from './all/Sample/sample';

export const actions: ActionRegister = () =>
  registerActions<ActionProviders>([
    /* 
    Enter your actions here. You'll need to register the provider name in ./providers.ts
    {
      provider: ActionProviders.SAMPLE_WRAPPED_ACTION,
      methods: {
        main: sampleAction,
      }
    },
    {
      provider: ActionProviders.SAMPLE_WRAPPED_ACTION,
      methods: {
        main: sampleActionWrappedFunction,
      }
    }
    */
  ]);
