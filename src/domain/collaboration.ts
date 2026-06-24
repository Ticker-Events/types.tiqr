import type { TUser } from "./user.js";
import type { TTickerEvent } from "./event.js";

/**
 * Collaboration invite or membership linking a user to an event.
 */
export type TCollaboration = {
  id: number;
  can_edit: boolean;
  is_accepted: boolean;
  user: TUser;
  require_acceptance: boolean;
  event: number;
  type: string;
};

/**
 * Collaboration record with the full event and requester expanded.
 */
export type TCollaborationItem = {
  id: number;
  can_edit: boolean;
  is_accepted: boolean;
  user?: TUser;
  require_acceptance: boolean;
  event: TTickerEvent;
  type: string;
  requested_by: TUser;
};
