import type { TUser } from "./user.js";

export type TShortUrl = {
  id: string;
  title: string;
  tiny_url: string;
  original_url: string;
  created_at: string;
  created_by: TUser;
  visit_count: number;
  visits: TShortUrlVisit[];
};

export type TShortUrlVisit = {
  ip_address: string;
  user_agent: string;
  referer: string;
  country: string;
  ip_info: Record<string, unknown>;
  device_info: Record<string, unknown>;
  created_at: string;
};

export type TShortUrlVisitPerDay = {
  date: string;
  count: number;
};

export type TShortUrlVisitPerCountry = {
  country: string;
  count: number;
};

/** @deprecated Use TShortUrl */
export type ShortUrl = TShortUrl;

/** @deprecated Use TShortUrlVisit */
export type ShortUrlVisit = TShortUrlVisit;
