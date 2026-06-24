import type { TImageMedia } from "../common/media.js";
import type { TSocialMedia } from "../common/metadata.js";
import type { TListResponse } from "../common/pagination.js";
import type { TAddress } from "./address.js";
import type { TStore } from "./store.js";

/** KYC verification status for a user or store. */
export type TKycStatus =
  | "not_submitted"
  | "processing"
  | "approved"
  | "rejected"
  | "provisional";

/**
 * WhatsApp Business project linked to a user or store account.
 */
export type TWAProject = {
  id: number;
  name: string;
  phone_number: string;
};

/**
 * TiQr platform user. Shared across Store and Events products.
 */
export type TUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  /** Public display handle on Ticker/Events. */
  ticker_name?: string;
  profile_picture?: TImageMedia | null;
  cover?: TImageMedia | null;
  bio?: string;
  phone_number?: string;
  website?: string;
  /** Free-text address string on the profile. */
  address?: string;
  gst_number?: string;
  social_media?: TSocialMedia;
  is_hosting_enabled?: boolean;
  is_managed_profile?: boolean;
  /** Profile sort priority (API field name retains legacy spelling). */
  prority: number;
  kyc_status: string;
  display_name: string;
  projects: TWAProject[];
  /** Default store when the user is a store owner. */
  default_store?: TStore;
  /** Saved shipping addresses (Store). */
  addresses?: TListResponse<TAddress>;
  /** Nested membership users when `is_membership_club` is true (Events). */
  memberships?: TUser[];
  is_membership_club?: boolean;
  referral_code?: string;
};

/**
 * Membership tier or class offered by a membership-club organiser.
 */
export type TMembershipClass = {
  id: number;
  name: string;
};

/**
 * Pending or resolved connection request between two event attendees.
 */
export type TConnectionRequest = {
  id: number;
  from_user: number;
  to_user: number;
  status: "pending" | "accepted" | "rejected";
  email: string;
  phone_number: string;
};
