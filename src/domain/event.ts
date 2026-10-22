import type { THashMap } from "../common/hash-map.js";
import type { TImageMedia, TImgAndPdf } from "../common/media.js";
import type { TUser } from "./user.js";
import type { TPlace } from "./place.js";
import type { TTickerForm } from "./event-form.js";
import type { TTicketResponse } from "./ticket.js";
import type { TSectionConfiguration } from "./seating.js";
import type { TSpeakerResponse } from "./speaker.js";

/**
 * Core event fields produced by AI-assisted event creation or manual entry.
 */
export type TTickerAIEventData = {
  name: string;
  logo?: TImageMedia;
  cover?: TImageMedia;
  start_date: string;
  end_date: string;
  description?: string;
  short_description: string;
  is_public?: boolean;
  is_online: boolean;
  is_published: boolean;
  genre: string;
  tags?: string[];
  address?: TPlace;
  venue?: string;
};

/**
 * Collaborators grouped by role on an event.
 */
export type TEventCollaboratorsMap = {
  partner?: TUser[];
  cohost?: TUser[];
  speaker?: TUser[];
  artist?: TUser[];
};

/**
 * Platform and gateway fee configuration applied to ticket sales.
 */
export type TPlatformFee = {
  tiqr_fee_percentage: number;
  gateway_fee_percentage: number;
  tiqr_fee_fixed: number;
  gst: number;
};

/**
 * Gallery media item returned on participant event detail.
 */
export type TEventGalleryItem = {
  id: number;
  gallery?: string;
  path?: string;
};

/**
 * Full event entity returned by the TiQr Events API.
 */
export type TTickerEvent = TTickerAIEventData & {
  id?: number;
  tickets?: TTicketResponse[];
  forms?: TTickerForm[];
  create_default_form?: boolean;
  organiser?: TUser;
  created_by?: TUser;
  platform_fee?: TPlatformFee;
  collaborators?: TEventCollaboratorsMap;
  gallery1?: TImgAndPdf;
  gallery2?: TImgAndPdf;
  gallery3?: TImgAndPdf;
  gallery4?: TImgAndPdf;
  /** Single cover-style gallery image or participant detail gallery list. */
  gallery?: TImageMedia | TEventGalleryItem[];
  speakers?: TSpeakerResponse[];
  is_express_checkout_enabled?: boolean;
  has_seat_configuration?: boolean;
  has_coupon_based_discount?: boolean;
  section_configuration?: TSectionConfiguration;
  minimum_ticket_price: number;
  starting_price: number;
  is_parent?: boolean;
  allow_bulk_booking?: boolean;
  customisation?: THashMap;
  timezone?: string;
  qr_code_id?: string | null;
  priority?: number;
  is_recurring?: boolean;
  recurring_type?: string;
  recurring_interval?: number;
  closed_days?: string[];
  closed_dates?: string[];
  external_booking_url?: string;
  allow_app_booking?: boolean;
};

/**
 * Compact event card returned by participant list and highlighted endpoints.
 */
export type TEventListItem = {
  id: number;
  name: string;
  logo?: TImageMedia;
  cover?: TImageMedia;
  start_date: string;
  end_date: string;
  short_description: string;
  genre: string;
  is_online: boolean;
  is_public?: boolean;
  is_published: boolean;
  address?: TPlace | Record<string, unknown>;
  priority?: number;
  is_recurring?: boolean;
  recurring_type?: string;
  recurring_interval?: number;
  closed_days?: string[];
  closed_dates?: string[];
  external_booking_url?: string;
  customisation?: THashMap;
  timezone?: string;
  allow_app_booking?: boolean;
  qr_code_id?: string | null;
  minimum_ticket_price?: number;
  maximum_ticket_price?: number;
  starting_price?: number;
  ticket_prices?: number[];
  organiser?: TUser;
};

/**
 * Query parameters for `GET participant/event/`.
 */
export type TEventListParams = {
  genre?: string;
  created_by?: string | number;
  hosted_by?: string | number;
  start_date?: string;
  end_date?: string;
  is_online?: boolean;
  sort_by?: string;
  search?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  limit?: number;
  offset?: number;
};

/** Event count grouped by genre for discovery pages. */
export type TGenreSummary = {
  genre: string;
  count: number;
};

/** Tag option used in creatable tag select inputs. */
export type TTag = {
  label: string;
  value: string;
  /** Set when the tag was created inline in a creatable select. */
  __isNew__?: boolean;
};

/** Formatted date strings for event card and hero displays. */
export type TDateDisplay = {
  singleDayEvent?: boolean;
  subTitle?: string;
  title?: string;
};

/** Single option in an event filter dropdown. */
export type TFilterOption = {
  label: string;
  value: string;
};

/** Filter group with a label, key, and selectable options. */
export type TFilter = {
  label: string;
  key: string;
  value?: string;
  options: TFilterOption[];
};

/** Key-value map of currently applied event list filters. */
export type TAppliedFilters = {
  [key: string]: string | undefined;
};
