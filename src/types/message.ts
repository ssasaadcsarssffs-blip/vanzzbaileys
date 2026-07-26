export interface MessageKey {
  remoteJid: string

  id: string

  fromMe: boolean
}

export interface WAMessage {
  key: MessageKey

  message?: unknown

  messageTimestamp?: number
}
