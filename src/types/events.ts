export interface ConnectionState {
  connection:
    | "open"
    | "close"
    | "connecting"

  lastDisconnect?: Error

  qr?: string

  pairingCode?: string
}
