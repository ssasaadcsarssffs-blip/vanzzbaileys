import type { AuthenticationState } from "../auth"

export interface SocketConfig {
  auth: AuthenticationState

  browser?: [string, string, string]

  version?: [number, number, number]

  connectTimeoutMs?: number

  keepAliveIntervalMs?: number

  logger?: unknown
}
