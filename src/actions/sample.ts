import { DynamicServiceBody, ActionReturnValue, SandboxLib } from 'wordparrot-types'
import { Axios, AxiosResponse } from 'axios'

export const sampleAction = async (body: DynamicServiceBody, lib: SandboxLib): ActionReturnValue => {
    return {
      message: 'test_succeeded',
      itemsToPassOn: [],
      filesToPassOn: [],
      tokensToPassOn: []
    }
}

