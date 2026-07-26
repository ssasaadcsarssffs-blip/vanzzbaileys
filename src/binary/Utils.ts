/**
 * Binary Utilities
 */

export function isBinaryNode(
    value: unknown
): boolean {

    return (
        typeof value === "object" &&
        value !== null
    )

}
