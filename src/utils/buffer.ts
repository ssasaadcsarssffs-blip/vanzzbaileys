/**
 * Buffer utilities.
 */

export const EMPTY_BUFFER = Buffer.alloc(0)

export function toBuffer(
    data: string | Uint8Array
): Buffer {
    return Buffer.isBuffer(data)
        ? data
        : Buffer.from(data)
}
