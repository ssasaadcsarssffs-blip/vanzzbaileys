/**
 * Event Buffer
 */

export class EventBuffer<T> {

    private events: T[] = []

    push(event: T) {
        this.events.push(event)
    }

    flush() {
        const list = [...this.events]

        this.events.length = 0

        return list
    }

}
