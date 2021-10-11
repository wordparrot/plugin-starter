export const sampleAction = async (config: any, lib: any): Promise<any> => {
    // Write code here

    // Wordparrot's plugin sandbox will make commonly-used libraries available upon execution.
    // They do not need to be bundled.
    // const { axios, _, dateFns } = lib

    // Return itemsToPassOn: [json values] to add json data to the pipeline job.
    // Return filesToPassOn: [file metadata] to add file data to the pipeline job.
    return {
        itemsToPassOn: [],
        itemsToRemove: [],
        filesToPassOn: [],
        filesToRemove: [],
    }
}