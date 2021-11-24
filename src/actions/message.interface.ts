export interface Message {
    id: string
    threadId: string
    labelIds: string[]
    snippet: string
    historyId: string
    internalDate: string
    payload: {
        partId: string
        mimeType: string
        filename: string
        headers: any[]
        body: {}
        parts: MessagePart[]
    }
    sizeEstimate: number
    raw: string
}

export interface MessagePart {
    partId: string
    mimeType: string
    filename: string
    headers: string[]
    body: Record<string, MessagePartBody>
    parts: MessagePart[]
}

export interface MessagePartBody {
    attachmentId: string
    size: number
}

export interface ListResponse {
    resultSizeEstimate: number
    messages: Message[]
}

export interface RepositoryItem {
    id?: string
    collectionId?: string
    uniqId?: string
    nodeUniqId?: string
    __wpsf_?: boolean
    authorId?: string
    authorName?: string
    authorScreenName?: string
    language?: string
    location?: string
    groupId?: string
    provider?: string
    platform?: string
    type?: string
    subtype?: string
    title: string
    content: string
    thumbnail?: string
    permalink?: string
    url?: string
    youtube?: string
    format?: string
    array?: string[]
    rank?: string
    originalCreatedAt?: string
    createdAt?: string
    updatedAt?: string
    json?: any
  }