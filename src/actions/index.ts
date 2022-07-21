import { ActionRegister } from 'wordparrot-types'

import { registerActions } from 'register'
import { ActionProviders } from './providers'

export const actions: ActionRegister = () => {
    return registerActions<ActionProviders>([

    ])
}