import type { IconType } from "react-icons";
import type { TListResponse } from "../common/pagination.js";
import type { TAppliedFilters, TGenreSummary, TTickerEvent } from "../domain/event.js";
import type { TTickerFormWithEvent } from "../domain/event-form.js";
import type { TSeatConfigurationResponse } from "../domain/seating.js";
import type { TSpeakerResponse } from "../domain/speaker.js";
import type { TTicketResponse } from "../domain/ticket.js";
import type { TUser } from "../domain/user.js";

/** Server-side data for the events home page. */
export type THomeData = {
  error: boolean;
  highlightedEvents?: TTickerEvent[];
  genreSummary?: TGenreSummary[];
  futureEvents?: TListResponse<TTickerEvent>;
  pastEvents?: TListResponse<TTickerEvent>;
  organisers?: TListResponse<TUser>;
  html?: string;
  user?: TUser | null;
};

/** Server-side data for the all-organisers listing page. */
export type TAllOrganisersData = {
  error: boolean;
  organisers?: TListResponse<TUser>;
};

/** Server-side data for an individual organiser profile page. */
export type TOrganisersHomeData = {
  error: boolean;
  organiser?: TUser;
  futureEvents?: TListResponse<TTickerEvent>;
  pastEvents?: TListResponse<TTickerEvent>;
};

/** Server-side data for a public event landing page. */
export type TEventLandingPageData = {
  error: boolean;
  eventData?: TTickerEvent;
  showsData?: TListResponse<TTickerEvent>;
  speakers?: TSpeakerResponse;
};

/** Server-side data for the ticket booking/checkout page. */
export type TTicketBookingPageData = {
  error: boolean;
  eventData: TTickerEvent;
  ticketData?: TTicketResponse;
};

/** Server-side data for the seat selection page. */
export type TSelectSeatsPageData = {
  error: boolean;
  eventData?: TTickerEvent;
  seatConfiguration?: TSeatConfigurationResponse;
};

/** Server-side data for the section selection page (SVG seating). */
export type TSelectSectionPageData = {
  error: boolean;
  eventData?: TTickerEvent;
  sectionConfiguration?: TSeatConfigurationResponse;
};

/** Server-side data for a standalone public form page. */
export type TFormResponsePageData = {
  error: boolean;
  form?: TTickerFormWithEvent;
};

/** Server-side data for a genre-filtered events listing page. */
export type TGenreEventsPageData = {
  error: boolean;
  genre?: string;
  events?: TListResponse<TTickerEvent>;
};

/** Server-side data for a custom-filtered events listing page. */
export type TFilterEventsPageData = {
  error: boolean;
  filterKey?: string;
  filters?: TAppliedFilters;
  events?: TListResponse<TTickerEvent>;
};

/** Structured event fields produced by the Tiqrai AI assistant. */
export type TTiqraiEventData = {
  eventName: string;
  startDate: string;
  endDate: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  tags: string[];
};

/** Genre tile rendered on the events discovery page. */
export type TGenreItem = {
  Icon: IconType;
  label: string;
  count?: number;
};
