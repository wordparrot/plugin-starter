import { ActionFormConfiguration } from 'wordparrot-types';

import { ActionProviders } from '@/src/actions/providers';

export const SampleActionFormConfig: ActionFormConfiguration<ActionProviders> = {
  name: 'My New Action (This is how users will see your action)',
  description: 'Describe in one sentence what it does...',
  provider: ActionProviders.SAMPLE_ACTION,
  type: 'plugin',
  initialValues: {
    title: '',
    content: '',
    provider: ActionProviders.SAMPLE_ACTION,
    status: 'ok',
    type: 'PLUGIN',
    values: {},
  },
  fields: [],
  validationSchema: [],
};
