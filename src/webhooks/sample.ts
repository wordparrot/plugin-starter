import { 
    DynamicServiceBody, 
    WebhookReturnValue, 
    SandboxLib
} from 'wordparrot-types'

export const sampleWebhook = async (body: DynamicServiceBody, lib: SandboxLib): WebhookReturnValue => {
    const { request, webhook, routeId } = body?.webhook || {}
    
    return {
        webhookResponse: {
            statusCode: 201,
            headers: {},
            cookies: {},
            body: {},
        },
        passEvent: false,
    }
}