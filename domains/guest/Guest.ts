export interface Guest {
    name: string,
    affiliation: string,
    icon: string,
    urls: SNSUrls
}

export interface SNSUrls {
    youtube: string,
    twitter: string,
    official: string,
}