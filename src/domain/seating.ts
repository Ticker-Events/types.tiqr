import type { TTicketRequest } from "./ticket.js";

export type TSeatSection = {
  id: number;
  name: string;
  seats_row_count: number;
  seats_column_count: number;
  seats_row_start: string;
  seats_column_start: number;
};

export type TSeatConfiguration = {
  id: number;
  name: string;
  ticket: TTicketRequest;
  sections: TSeatSection[][];
};

export type TSeatConfigurationResponse = {
  seat_configuration: TSeatConfiguration[];
  confirmed: string[];
  pending_payment: string[];
};

/** @deprecated Use TSeatConfigurationResponse */
export type TSeatConfigurtaionResponse = TSeatConfigurationResponse;

export type TSectionTicketConfiguration = {
  [key: string]: number;
};

export type TSectionConfiguration = {
  tickets: TSectionTicketConfiguration;
  svg_url: string;
};

/** @deprecated Use TSectionConfiguration */
export type TSectionConfigurtaion = TSectionConfiguration;
