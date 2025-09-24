export type credentialEntry = {
    url: string,
    originUrl: string,
    login: string,
    password: string,
    iv: string,
    tag: string,
    notes: string,
    category: string,
}

export interface credentialInterface {
  id: string
  password: string
  createdAt: Date
  updatedAt: Date
  url: string
  originUrl: string
  login: string
  iv: string
  tag: string
  notes: string
  category: string
}