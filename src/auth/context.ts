import type { User } from "firebase/auth";

export type TAuth = {
  user: User | null;
  signOut: () => Promise<void>;
};
