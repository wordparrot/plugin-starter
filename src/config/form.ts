import { FormConfiguration } from '../register';

// Actions
import { SampleActionFormConfig } from '../actions/all/Sample/sample.formconfig';

// Credentials
import { SampleCredentialFormConfig } from '../credentials/all/SampleCredential/sample-credential.formconfig';

// Listeners

// Webhooks

const Form: FormConfiguration = {
  actions: [
    /* 
    Enter your action form configuration here. You'll need to register the provider name in ./providers.ts
    
      SampleActionFormConfig,
    */
  ],
  credentials: [
    /* 
    Enter your sample credential form configuration here.
    
      SampleCredentialFormConfig,
    */
  ],
  listeners: [],
  webhooks: [],
  blueprints: [],
};

export default Form;
