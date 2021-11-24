export const sampleListener = async (mainParameters: Record<string, any>, lib: any): Promise<{
    passEvent: boolean
}> => {
    // Write code here

    // Return passEvent: false to disable invocation of pipeline actions.
    return {
        passEvent: true
    }
}