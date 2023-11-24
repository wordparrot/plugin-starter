import { DynamicServiceBodyWithLib, WebhookReturnValue } from 'wordparrot-types';

export const sampleWebhook = async (body: DynamicServiceBodyWithLib): WebhookReturnValue => {
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
