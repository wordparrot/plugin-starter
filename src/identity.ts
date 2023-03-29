import { getProviderFn } from './register';

/* 
    Enter the plugin name and author here. Usually for both values, that is the name of your company or service. Example: instagram/instagram

*/
const PLUGIN_NAME = '#';
const AUTHOR = '#';

/* 
    This function is imported into actions/webhooks/listeners/prompts and can be used to produce valid provider strings.

*/
export const getProvider = getProviderFn(PLUGIN_NAME, AUTHOR);
