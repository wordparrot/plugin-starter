import { DynamicServiceBody, WebhookReturnValue } from 'wordparrot-types';
import { SandboxLib } from 'wordparrot-types-backend';

export const sampleWebhook = async (body: DynamicServiceBody, lib: SandboxLib): WebhookReturnValue => {
  const { request, webhook, routeId } = body?.webhook || {};

  return {
    webhookResponse: {
      statusCode: 201,
      headers: {},
      cookies: {},
      body: {},
    },
    passEvent: false,
  };
};
