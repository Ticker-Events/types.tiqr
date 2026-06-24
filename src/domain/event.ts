import type { THashMap } from "../common/hash-map.js";
import type { TImageMedia, TImgAndPdf } from "../common/media.js";
import type { TUser } from "./user.js";
import type { TPlace } from "./place.js";
import type { TTickerForm } from "./event-form.js";
import type { TTicketResponse } from "./ticket.js";
import type { TSectionConfiguration } from "./seating.js";

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

export type TEventCollaboratorsMap = {
  partner?: TUser[];
  cohost?: TUser[];
  speaker?: TUser[];
  artist?: TUser[];
};

export type TPlatformFee = {
  tiqr_fee_percentage: number;
  gateway_fee_percentage: number;
  tiqr_fee_fixed: number;
  gst: number;
};

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
  gallery?: TImageMedia;
  is_express_checkout_enabled?: boolean;
  has_seat_configuration?: boolean;
  section_configuration?: TSectionConfiguration;
  minimum_ticket_price: number;
  starting_price: number;
  is_parent?: boolean;
  allow_bulk_booking?: boolean;
  customisation?: THashMap;
  timezone?: string;
  qr_code_id?: string | null;
};

export type TGenreSummary = {
  genre: string;
  count: number;
};

export type TTag = {
  label: string;
  value: string;
  __isNew__?: boolean;
};

export type TDateDisplay = {
  singleDayEvent?: boolean;
  subTitle?: string;
  title?: string;
};

export type TFilterOption = {
  label: string;
  value: string;
};

export type TFilter = {
  label: string;
  key: string;
  value?: string;
  options: TFilterOption[];
};

export type TAppliedFilters = {
  [key: string]: string | undefined;
};
