import {
  ActionRegisterItem,
  CredentialRegister,
  CredentialRegisterItem,
  ListenerRegister,
  ListenerRegisterItem,
  WebhookRegister,
  WebhookRegisterItem,
  PluginFormConfiguration,
  ActionRegister,
} from 'wordparrot-types';

import { ActionProviders } from '../src/actions/providers';
import { CredentialProviders } from '../src/credentials/providers';
import { ListenerProviders } from '../src/listeners/providers';
import { WebhookProviders } from '../src/webhooks/providers';

export const registerActions = (
  actionsArray: ActionRegisterItem<ActionProviders>[]
): ActionRegister<ActionProviders> => {
  const obj: ActionRegister<ActionProviders> = {};

  return actionsArray.reduce((accumulator, counter) => {
    const provider = counter.provider;
    accumulator[provider] = counter;
    return accumulator;
  }, obj);
};

export const registerCredentials = (
  credentialsArray: CredentialRegisterItem<CredentialProviders>[]
): CredentialRegister<CredentialProviders> => {
  const obj: CredentialRegister<CredentialProviders> = {};
  return credentialsArray.reduce((accumulator, counter) => {
    const provider = counter.provider;
    accumulator[provider] = counter;
    return accumulator;
  }, obj);
};

export const registerListeners = (
  listenersArray: ListenerRegisterItem<ListenerProviders>[]
): ListenerRegister<ListenerProviders> => {
  const obj: ListenerRegister<ListenerProviders> = {};
  return listenersArray.reduce((accumulator, counter) => {
    const provider = counter.provider;
    accumulator[provider] = counter;
    return accumulator;
  }, obj);
};

export const registerWebhooks = (
  webhooksArray: WebhookRegisterItem<WebhookProviders>[]
): WebhookRegister<WebhookProviders> => {
  const obj: WebhookRegister<WebhookProviders> = {};
  return webhooksArray.reduce((accumulator, counter) => {
    const provider = counter.provider;
    accumulator[provider] = counter;
    return accumulator;
  }, obj);
};

export const getProviderFn =
  (NAME: string, AUTHOR: string) =>
  (provider: string): any => {
    const regex = /^([a-zA-Z0-9-]){1,45}$/;

    if (!NAME || !AUTHOR) {
      throw new Error('getProvider: author and name values must both be set');
    }

    if (!provider.match(regex)) {
      throw new Error(`getProvider: ${provider} is not a valid provider string segment`);
    }

    return `${AUTHOR}.${NAME}.${provider}`;
  };

export type FormConfiguration = PluginFormConfiguration<
  ActionProviders,
  CredentialProviders,
  ListenerProviders,
  WebhookProviders
>;
