/*[app/lib/models/credentials-models.ts]*/
export type Credentials = {
    id: string,
    url: string,
    originUrl: string,
    login: string,
    password: string,
    iv: string,
    tag: string,
    notes: string,
    category: string,
}