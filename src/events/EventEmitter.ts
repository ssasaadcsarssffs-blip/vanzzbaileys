/**
 * Typed EventEmitter
 */

import { EventEmitter } from "events"

import type { BaileysEventMap } from "./EventMap"

export class BaileysEventEmitter extends EventEmitter {

    emit<K extends keyof BaileysEventMap>(
        event: K,
        data: BaileysEventMap[K]
    ) {
        return super.emit(event, data)
    }

    on<K extends keyof BaileysEventMap>(
        event: K,
        listener: (data: BaileysEventMap[K]) => void
    ) {
        return super.on(event, listener)
    }

}
