import { FormConfiguration } from '../register';

// Actions
import { sampleFormConfig } from '../actions/all/Sample/sample.export';

// Credentials
import { sampleCredentialFormConfig } from '../credentials/all/SampleCredential/sample-credential.export';

// Listeners

// Webhooks

const Form: FormConfiguration = {
  actions: [
    /* 
    Enter your action form configuration here. You'll need to register the provider name in ./providers.ts
    
      sampleFormConfig,
    */
  ],
  credentials: [
    /* 
    Enter your sample credential form configuration here.
    
      sampleCredentialFormConfig,
    */
  ],
  listeners: [],
  webhooks: [],
  blueprints: [],
};

export default Form;
