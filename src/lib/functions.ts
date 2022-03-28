export const getMimeType = (extension: string) => {
    switch(extension) {
        case 'csv':
            return 'text/csv'
        default:
            throw new Error('mimetype_not_supported')
    }
}