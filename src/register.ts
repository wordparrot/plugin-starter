import {
  ActionRegister,
  ActionRegisterItem,
  ActionRegisterValues,
  CredentialRegister,
  CredentialRegisterItem,
  CredentialRegisterValues,
  ListenerRegister,
  ListenerRegisterItem,
  ListenerRegisterValues,
  WebhookRegister,
  WebhookRegisterItem,
  WebhookRegisterValues,
  PluginFormConfiguration,
} from 'wordparrot-types';

import { ActionProviders } from './actions/providers';
import { CredentialProviders } from './credentials/providers';
import { ListenerProviders } from './listeners/providers';
import { WebhookProviders } from './webhooks/providers';

export const registerActions: ActionRegister = <T>(actionsArray: ActionRegisterItem<T>[]) => {
  const obj: Record<string, ActionRegisterValues> = {};
  return actionsArray.reduce((accumulator, counter) => {
    const provider = counter.provider as unknown as string;
    accumulator[provider] = counter;
    return accumulator;
  }, obj);
};

export const registerCredentials: CredentialRegister = <T>(credentialsArray: CredentialRegisterItem<T>[]) => {
  const obj: Record<string, CredentialRegisterValues> = {};
  return credentialsArray.reduce((accumulator, counter) => {
    const provider = counter.provider as unknown as string;
    accumulator[provider] = counter;
    return accumulator;
  }, obj);
};

export const registerListeners: ListenerRegister = <T>(listenersArray: ListenerRegisterItem<T>[]) => {
  const obj: Record<string, ListenerRegisterValues> = {};
  return listenersArray.reduce((accumulator, counter) => {
    const provider = counter.provider as unknown as string;
    accumulator[provider] = counter;
    return accumulator;
  }, obj);
};

export const registerWebhooks: WebhookRegister = <T>(webhooksArray: WebhookRegisterItem<T>[]) => {
  const obj: Record<string, WebhookRegisterValues> = {};
  return webhooksArray.reduce((accumulator, counter) => {
    const provider = counter.provider as unknown as string;
    accumulator[provider] = counter;
    return accumulator;
  }, obj);
};

export type FormConfiguration = PluginFormConfiguration<
  ActionProviders,
  CredentialProviders,
  ListenerProviders,
  WebhookProviders
>;
