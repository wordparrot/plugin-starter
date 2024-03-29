import { PluginJsonConfiguration } from 'wordparrot-types';

import { PLUGIN_NAME, PLUGIN_AUTHOR, PLUGIN_VERSION, HUB_PLUGIN_ID } from '../../src/identity';

const PluginJson: PluginJsonConfiguration = {
  name: PLUGIN_NAME,
  author: PLUGIN_AUTHOR,
  version: PLUGIN_VERSION,
  hubPluginId: HUB_PLUGIN_ID,

  title: '',
  description: '',
  private: false,
  platform: '',
  website: '',
  sourceVersion: '0.0.1',
  repository: '',
  license: '',
  logo: '',
  authLogo: '',
  categories: [],
  subcategories: [],
  attachments: [
    // {
    //   id: "1",
    //   title: "Test.txt",
    //   content: "Testing out stuff.",
    //   author: "wordparrot",
    //   version: "1.0.0",
    //   filename: "test.txt",
    //   format: "txt",
    //   size: 100,
    //   date: Date.now(),
    // }
  ],
};

export default PluginJson;
