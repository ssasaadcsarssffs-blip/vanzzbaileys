export interface AuthenticationCreds {
  noiseKey: Uint8Array
  identityKey: Uint8Array
  signedIdentityKey: Uint8Array

  registrationId: number

  advSecretKey: string

  me?: {
    id: string
    name?: string
  }

  account?: unknown

  signalIdentities: unknown[]

  platform: string

  processedHistoryMessages: unknown[]

  nextPreKeyId: number

  firstUnuploadedPreKeyId: number

  accountSyncCounter: number

  lastAccountSyncTimestamp: number

  myAppStateKeyId: string
}
