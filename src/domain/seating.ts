import type { TTicketRequest } from "./ticket.js";

/**
 * Rectangular block of seats within a seat map section.
 */
export type TSeatSection = {
  id: number;
  name: string;
  seats_row_count: number;
  seats_column_count: number;
  seats_row_start: string;
  seats_column_start: number;
};

/**
 * Seat map configuration linked to a ticket type.
 */
export type TSeatConfiguration = {
  id: number;
  name: string;
  ticket: TTicketRequest;
  sections: TSeatSection[][];
};

/**
 * Live seat availability returned when a buyer selects seats.
 */
export type TSeatConfigurationResponse = {
  seat_configuration: TSeatConfiguration[];
  /** Seat IDs already confirmed (sold). */
  confirmed: string[];
  /** Seat IDs held pending payment completion. */
  pending_payment: string[];
};

/** @deprecated Use {@link TSeatConfigurationResponse} */
export type TSeatConfigurtaionResponse = TSeatConfigurationResponse;

/**
 * Maps SVG section identifiers to ticket IDs for section-based seating.
 */
export type TSectionTicketConfiguration = {
  [key: string]: number;
};

/**
 * Section-based seating layout with an SVG map URL.
 */
export type TSectionConfiguration = {
  tickets: TSectionTicketConfiguration;
  svg_url: string;
};

/** @deprecated Use {@link TSectionConfiguration} */
export type TSectionConfigurtaion = TSectionConfiguration;
