/**
 * Binary Reader
 */

export class BinaryReader {

    constructor(
        readonly buffer: Buffer
    ) {}

    readUInt8() {
        throw new Error(
            "BinaryReader.readUInt8() not implemented."
        )
    }

    readBytes(
        length: number
    ) {
        throw new Error(
            `BinaryReader.readBytes(${length}) not implemented.`
        )
    }

}
