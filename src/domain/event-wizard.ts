import type { TPlace } from "./place.js";

/** Step 1 payload for the event creation wizard (basic details). */
export type TWBasicRequest = {
  id?: number;
  name: string;
  start_date: string;
  end_date: string;
  short_description: string;
  is_public?: boolean;
  is_online: boolean;
  is_published: boolean;
  create_default_form?: boolean;
};

/** Step 2 payload for the event creation wizard (description and tags). */
export type TWDescriptionRequest = {
  id?: number;
  genre: string;
  tags: string[];
  description: string;
};

/** Step 3 payload for the event creation wizard (venue address). */
export type TWLocationRequest = {
  id?: number;
  address: TPlace;
};

/** Step 4 payload for the event creation wizard (cover and logo media IDs). */
export type TWPhotosRequest = {
  id?: number;
  cover?: number | null;
  logo?: number | null;
};

/** Step 5 payload for the event creation wizard (brochure media IDs). */
export type TWBrochureRequest = {
  id?: number;
  brochure1?: number | null;
  brochure2?: number | null;
  brochure3?: number | null;
};
