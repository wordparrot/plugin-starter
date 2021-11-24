import { fetchTokens } from "../credentials/tokens"

export const gmailListenerInbox = async (
  mainParameters: Record<string, any>, 
  lib: any
): Promise<{
  passEvent: boolean
}> => {
  const { axios, FileClass, _ } = lib
  const { listener } = mainParameters

  const { access_token } = await fetchTokens(mainParameters, lib, 'refresh_token')

  if (!access_token) {
    throw new Error('access_token_unavailable')
  }

  let values = listener.values
  
  const params: Record<string, any> = {}

  params.q = values?.search || 'is:unread'

  const emailAddress = values?.email

  if (!emailAddress) {
    throw new Error('email_address_invalid')
  }

  let listResponse

  try {
    listResponse = await axios(
      `https://gmail.googleapis.com/gmail/v1/users/${emailAddress}/messages`,
      {
          method: 'get',
          headers: {
              'Authorization': `Bearer ${access_token}`,
              'Accept': 'application/json',
          },
          params,
      }
    )
  } catch (e) {
    throw new Error('listeners-inbox-connection_error')
  }

  let messages = listResponse?.data?.messages

  if (!Array.isArray(messages)) {
    messages = []
  }

  if (values.comparator && _.isUndefined(values.target)) {
    throw new Error('messages_error_target_undefined')
  }

  if (values?.comparator === 'lessThan') {
    return {
      passEvent: messages.length < values.target
    }
  } else if (values?.comparator === 'greaterThan') {
    return {
      passEvent: messages.length > values.target
    }
  } else if (values?.comparator === 'equals') {
    return {
      passEvent: messages.length === values.target
    }
  } else {
    return {
      passEvent: messages.length > 0
    }
  }
}