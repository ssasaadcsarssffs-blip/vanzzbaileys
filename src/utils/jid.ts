/**
 * JID utilities.
 */

export function isJid(
    jid: string
): boolean {
    return jid.includes("@")
}

export function jidNormalizedUser(
    jid: string
): string {
    return jid.trim().toLowerCase()
}
