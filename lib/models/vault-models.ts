/*[app/lib/models/credentials-models.ts]*/
export type PasswordData = {
  url: string
  originUrl: string
  login: string
  password: string
  iv: string
  tag: string
  notes: string
  category: string
}

export type PasskeyData = {
  service: string
  publicKey: string
  privateKey?: string
  notes?: string
}

export type SecureNoteData = {
  title: string
  content: string
}

export type CreditCardData = {
  holder: string
  number: string
  expiry: string
  cvv: string
  pin?: string
  network?: string
  notes?: string
}

export type ContactInfoData = {
  name: string
  email?: string
  phone?: string
  address?: string
  notes?: string
}

export type DocumentData = {
  name: string
  fileUrl: string
  notes?: string
}

export type SharedItemData = {
  name: string
  sharedWith: string[]
  notes?: string
}

export type VaultData =
  | PasswordData
  | PasskeyData
  | SecureNoteData
  | CreditCardData
  | ContactInfoData
  | DocumentData
  | SharedItemData

export type VaultItemModel = {
  id?: string
  type: string
  data: VaultData
}
