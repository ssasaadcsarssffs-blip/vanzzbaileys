/**
 * WhatsApp Binary Node
 */

export interface BinaryNode {

    tag: string

    attrs: Record<string, string>

    content?:
        | BinaryNode[]
        | Uint8Array
        | string

}
