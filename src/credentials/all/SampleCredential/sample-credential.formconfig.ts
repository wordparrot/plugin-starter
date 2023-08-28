import { CredentialFormConfiguration } from 'wordparrot-types';

import { CredentialProviders } from '@/src/credentials/providers';

export const SampleCredentialFormConfig: CredentialFormConfiguration<CredentialProviders> = {
  name: 'My New Credential',
  description: 'Describe in one sentence what it accesses...',
  provider: CredentialProviders.MY_NEW_CREDENTIAL,
  type: 'plugin',
  initialValues: {
    title: '',
    content: '',
    provider: CredentialProviders.MY_NEW_CREDENTIAL,
    status: 'ok',
    type: 'PLUGIN',
    values: {},
  },
  fields: [],
  validationSchema: [],
};
