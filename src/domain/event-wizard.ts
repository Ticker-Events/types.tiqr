import type { TPlace } from "./place.js";

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

export type TWDescriptionRequest = {
  id?: number;
  genre: string;
  tags: string[];
  description: string;
};

export type TWLocationRequest = {
  id?: number;
  address: TPlace;
};

export type TWPhotosRequest = {
  id?: number;
  cover?: number | null;
  logo?: number | null;
};

export type TWBrochureRequest = {
  id?: number;
  brochure1?: number | null;
  brochure2?: number | null;
  brochure3?: number | null;
};
