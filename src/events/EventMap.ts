/**
 * VanzzBaileys Event Map
 */

import type { WAMessage } from "../types"

export interface BaileysEventMap {

    "connection.update": unknown

    "creds.update": unknown

    "messages.upsert": {
        messages: WAMessage[]
        type: "notify" | "append"
    }

    "messages.update": unknown

    "messages.delete": unknown

    "messages.reaction": unknown

    "presence.update": unknown

    "contacts.update": unknown

    "chats.update": unknown

    "groups.update": unknown

}
