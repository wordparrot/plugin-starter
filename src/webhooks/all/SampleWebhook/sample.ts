import { Params, WebhookReturnValue } from 'wordparrot-types';

export const sampleWebhook = async (params: Params): WebhookReturnValue => {
  const { request, webhook, routeId } = params.webhook;

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
