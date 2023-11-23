import { getProviderFn } from './register';

/* 
    Enter your Wordparrot Hub username here. Example 'wordparrot'.
*/
export const PLUGIN_AUTHOR = '#';
/* 
    Enter the plugin name here. This will combine with the plugin author to form the first part of a provider string. Example: 'tools'
*/
export const PLUGIN_NAME = '#';
/* 
    Add the unique ID for this plugin, generated on Wordparrot Hub.
    https://hub.wordparrot.com/plugins/create
*/
export const HUB_PLUGIN_ID = '';
/* 
    Track the your plugin's internal version here. It should follow semantic versioning style.
*/
export const PLUGIN_VERSION = '1.0.0';

/* 
    This function is imported into actions/webhooks/listeners/prompts and can be used to produce valid provider strings.

*/
export const getProvider = getProviderFn(PLUGIN_NAME, PLUGIN_AUTHOR);
