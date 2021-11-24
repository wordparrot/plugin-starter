import { gmailList } from './actions/list'
import { gmailLabel } from './actions/label'
import { gmailListenerInbox } from './listeners/listener.inbox'
import { gmailRefreshToken } from "./credentials/authCallback"
import { gmailTest } from './credentials/test'
import { gmailForward } from './actions/forward'
// Gmail API Reference: https://developers.google.com/gmail/api/reference/rest

const moduleIndex = () => {
    const actions = () => {
        return {
            ["wordparrot-gmail.read"]: {
                main: gmailList,
            },
            ["wordparrot-gmail.label"]: {
                main: gmailLabel,
            },
            ["wordparrot-gmail.forward"]: {
                main: gmailForward,
            }
        }
    }
    
    const listeners = () => {
        return {
            ["wordparrot-gmail.inbox"]: {
                main: gmailListenerInbox
            }
        }
    }

    const credentials = () => {
        return {
            ["wordparrot-gmail.read"]: {
                authCallback: gmailRefreshToken,
                test: gmailTest,
            }
        }
    }

    return {
        actions,
        listeners,
        credentials,
    }
}

export default moduleIndex