import type { TImageMedia } from "../common/media.js";
import type { TSocialMedia } from "../common/metadata.js";
import type { TListResponse } from "../common/pagination.js";
import type { TAddress } from "./address.js";
import type { TStore } from "./store.js";

export type TKycStatus =
  | "not_submitted"
  | "processing"
  | "approved"
  | "rejected"
  | "provisional";

export type TWAProject = {
  id: number;
  name: string;
  phone_number: string;
};

export type TUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  ticker_name?: string;
  profile_picture?: TImageMedia | null;
  cover?: TImageMedia | null;
  bio?: string;
  phone_number?: string;
  website?: string;
  address?: string;
  gst_number?: string;
  social_media?: TSocialMedia;
  is_hosting_enabled?: boolean;
  is_managed_profile?: boolean;
  prority: number;
  kyc_status: string;
  display_name: string;
  projects: TWAProject[];
  default_store?: TStore;
  addresses: TListResponse<TAddress>;
};
