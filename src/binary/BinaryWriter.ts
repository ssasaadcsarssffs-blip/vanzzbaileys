/**
 * Binary Writer
 */

export class BinaryWriter {

    writeUInt8(
        value: number
    ) {
        throw new Error(
            `BinaryWriter.writeUInt8(${value}) not implemented.`
        )
    }

    writeBytes(
        value: Uint8Array
    ) {
        throw new Error(
            "BinaryWriter.writeBytes() not implemented."
        )
    }

}
