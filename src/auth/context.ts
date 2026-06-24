import type { User } from "firebase/auth";

/**
 * Authentication context value exposed by the TiQr auth provider.
 * Requires the `firebase` peer dependency.
 */
export type TAuth = {
  /** Currently signed-in Firebase user, or `null` when signed out. */
  user: User | null;
  /** Signs the user out and clears the session. */
  signOut: () => Promise<void>;
};
