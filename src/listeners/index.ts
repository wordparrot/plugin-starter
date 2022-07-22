import { ListenerRegister } from 'wordparrot-types';

import { registerListeners } from '../register';
import { ListenerProviders } from './providers';

export const listeners: ListenerRegister = () => registerListeners<ListenerProviders>([]);
