import { PluginMainModule } from 'wordparrot-types';

import { actions } from '@/src/actions';
import { credentials } from '@/src/credentials';
import { listeners } from '@/src/listeners';
import { webhooks } from '@/src/webhooks';

const ModuleFactory = (): PluginMainModule => {
  return {
    actions,
    listeners,
    credentials,
    webhooks,
  };
};

export default ModuleFactory;
