import { ActionFormConfiguration } from 'wordparrot-types';

import { ActionProviders } from '../../providers';

export const sampleFormConfig: ActionFormConfiguration<ActionProviders> = {
  name: 'My New Action (This is how users will see your action)',
  description: 'Describe in one sentence what it does...',
  provider: ActionProviders.MY_NEW_ACTION,
  type: 'plugin',
  initialValues: {
    title: '',
    content: '',
    provider: ActionProviders.MY_NEW_ACTION,
    status: 'ok',
    type: 'PLUGIN',
    values: {},
  },
  fields: [],
  validationSchema: [],
};
