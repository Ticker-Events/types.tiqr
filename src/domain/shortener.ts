import type { TUser } from "./user.js";

/**
 * Shortened URL record with visit analytics.
 */
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

/** Individual visit event recorded for a short URL. */
export type TShortUrlVisit = {
  ip_address: string;
  user_agent: string;
  referer: string;
  country: string;
  ip_info: Record<string, unknown>;
  device_info: Record<string, unknown>;
  created_at: string;
};

/** Daily visit count aggregate for short URL analytics. */
export type TShortUrlVisitPerDay = {
  date: string;
  count: number;
};

/** Visit count grouped by country for short URL analytics. */
export type TShortUrlVisitPerCountry = {
  country: string;
  count: number;
};

/** @deprecated Use {@link TShortUrl} */
export type ShortUrl = TShortUrl;

/** @deprecated Use {@link TShortUrlVisit} */
export type ShortUrlVisit = TShortUrlVisit;
