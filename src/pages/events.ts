import type { IconType } from "react-icons";
import type { TListResponse } from "../common/pagination.js";
import type { TAppliedFilters, TGenreSummary, TTickerEvent } from "../domain/event.js";
import type { TTickerFormWithEvent } from "../domain/event-form.js";
import type { TSeatConfigurationResponse } from "../domain/seating.js";
import type { TSpeakerResponse } from "../domain/speaker.js";
import type { TTicketResponse } from "../domain/ticket.js";
import type { TUser } from "../domain/user.js";

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

export type TAllOrganisersData = {
  error: boolean;
  organisers?: TListResponse<TUser>;
};

export type TOrganisersHomeData = {
  error: boolean;
  organiser?: TUser;
  futureEvents?: TListResponse<TTickerEvent>;
  pastEvents?: TListResponse<TTickerEvent>;
};

export type TEventLandingPageData = {
  error: boolean;
  eventData?: TTickerEvent;
  showsData?: TListResponse<TTickerEvent>;
  speakers?: TSpeakerResponse;
};

export type TTicketBookingPageData = {
  error: boolean;
  eventData: TTickerEvent;
  ticketData?: TTicketResponse;
};

export type TSelectSeatsPageData = {
  error: boolean;
  eventData?: TTickerEvent;
  seatConfiguration?: TSeatConfigurationResponse;
};

export type TSelectSectionPageData = {
  error: boolean;
  eventData?: TTickerEvent;
  sectionConfiguration?: TSeatConfigurationResponse;
};

export type TFormResponsePageData = {
  error: boolean;
  form?: TTickerFormWithEvent;
};

export type TGenreEventsPageData = {
  error: boolean;
  genre?: string;
  events?: TListResponse<TTickerEvent>;
};

export type TFilterEventsPageData = {
  error: boolean;
  filterKey?: string;
  filters?: TAppliedFilters;
  events?: TListResponse<TTickerEvent>;
};

export type TTiqraiEventData = {
  eventName: string;
  startDate: string;
  endDate: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  tags: string[];
};

export type TGenreItem = {
  Icon: IconType;
  label: string;
  count?: number;
};
