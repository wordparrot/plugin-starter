import { CredentialRegister } from 'wordparrot-types'

import { registerCredentials } from 'register'
import { CredentialProviders } from './providers'

export const credentials: CredentialRegister = () => registerCredentials<CredentialProviders>([
        
])
