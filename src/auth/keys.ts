export type SignalKeyType =
  | "pre-key"
  | "session"
  | "sender-key"
  | "app-state-sync-key"
  | "app-state-sync-version"
  | "sender-key-memory"

export interface SignalKeyStore {
  get<T>(
    type: SignalKeyType,
    ids: string[]
  ): Promise<Record<string, T>>

  set(
    data: Record<SignalKeyType, Record<string, unknown>>
  ): Promise<void>

  clear?(): Promise<void>
}
