import type { TImageMedia } from "../common/media.js";
import type { TUser } from "./user.js";
import type { TTickerEvent } from "./event.js";

export type TCollaboration = {
  id: number;
  can_edit: boolean;
  is_accepted: boolean;
  user: TUser;
  require_acceptance: boolean;
  event: number;
  type: string;
};

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
