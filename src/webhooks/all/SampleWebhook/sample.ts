import { Body, WebhookReturnValue } from 'wordparrot-types';

export const sampleWebhook = async (body: Body): WebhookReturnValue => {
  const { request, webhook, routeId } = body.webhook;

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
