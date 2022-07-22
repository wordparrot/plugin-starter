import { DynamicServiceBody, ActionReturnValue, SandboxLib } from 'wordparrot-types'

export const sampleAction = async (body: DynamicServiceBody, lib: SandboxLib): ActionReturnValue => {
    return {
      message: 'test_succeeded',
      itemsToPassOn: [],
      tokensToPassOn: []
    }
}

