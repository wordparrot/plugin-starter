import { PluginJsonConfiguration } from 'wordparrot-types';

import { PLUGIN_NAME, PLUGIN_AUTHOR, PLUGIN_VERSION } from '../identity';

const PluginJson: PluginJsonConfiguration = {
  name: PLUGIN_NAME,
  author: PLUGIN_AUTHOR,
  version: PLUGIN_VERSION,
  title: '',
  description: '',
  private: false,
  hubPluginId: '',
  platform: '',
  website: '',
  sourceVersion: '0.0.1',
  repository: '',
  license: '',
  logo: '',
  categories: [],
  subcategories: [],
};

export default PluginJson;
