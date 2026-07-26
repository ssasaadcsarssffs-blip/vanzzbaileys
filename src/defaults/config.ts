/**
 * Default socket configuration.
 */

export const DEFAULT_CONNECTION_CONFIG = {

  connectTimeoutMs: 60_000,

  keepAliveIntervalMs: 20_000,

  retryRequestDelayMs: 250,

  defaultQueryTimeoutMs: 60_000

} as const
