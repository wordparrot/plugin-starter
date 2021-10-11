export const sampleListener = async (config: any, lib: any): Promise<{
    passEvent: boolean
}> => {
    // Write code here

    // Return passEvent: false to disable invocation of pipeline actions.
    return {
        passEvent: true
    }
}