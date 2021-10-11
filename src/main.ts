// import {sampleAction} from './actions/sample'
// import {sampleListener} from './listeners/sample'
// import {sampleCallback} from './credentials/sample.callback'
// import {sampleTest} from './credentials/sample.test'

const wordparrotPluginIndex = () => {
    const actions = () => {
        return {
            // ["sampleAction"]: {
            //     main: sampleAction
            // }
        }
    }
    
    const listeners = () => {
        return {
            // ["sampleListener"]: {
            //     main: sampleListener,
            // }
        }
    }

    const credentials = () => {
        return {
            // ["sampleCredential"]: {
            //     authCallback: sampleCallback,
            //     test: sampleTest
            // }
        }
    }

    return {
        actions,
        listeners,
        credentials,
    }
}

export default wordparrotPluginIndex