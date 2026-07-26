import type { AuthenticationCreds } from "./credentials"
import type { SignalKeyStore } from "./keys"

export interface AuthenticationState {
  creds: AuthenticationCreds

  keys: SignalKeyStore
}
