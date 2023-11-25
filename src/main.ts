import { PluginFactory } from 'wordparrot-types';

import { actions } from '@/src/actions';
import { credentials } from '@/src/credentials';
import { listeners } from '@/src/listeners';
import { webhooks } from '@/src/webhooks';

const pluginFactory: PluginFactory = () => {
  return {
    actions,
    listeners,
    credentials,
    webhooks,
  };
};

export default pluginFactory;
