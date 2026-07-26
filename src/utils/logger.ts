/**
 * Logger.
 */

export interface Logger {
    info(...args: unknown[]): void
    warn(...args: unknown[]): void
    error(...args: unknown[]): void
    debug(...args: unknown[]): void
}

export const logger: Logger = {
    info: console.log,
    warn: console.warn,
    error: console.error,
    debug: console.debug
}
