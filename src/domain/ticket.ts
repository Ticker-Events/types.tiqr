import type { TImageMedia } from "../common/media.js";
import type { TPlatformFee, TTickerEvent } from "./event.js";
import type { TTickerForm } from "./event-form.js";
import type { TDiscountCoupon } from "./discount.js";
import type { TSeatConfiguration } from "./seating.js";

/**
 * Optional purchasable add-on attached to an event ticket.
 */
export type TTicketAddon = {
  id: number;
  name?: string;
  type: string;
  amount: number;
  description: string;
  minimum_quantity: number;
  maximum_quantity: number;
};

/**
 * Minimal ticket fields shared between request and response shapes.
 */
export type TBasicTicket = {
  id?: number;
  type: string;
  whatsapp_group_link?: string;
  cover?: TImageMedia;
  description?: string;
  /** Parent event ID when embedded in a list. */
  event?: number;
};

/**
 * Ticket payload for creating or updating a ticket via the organiser API.
 */
export type TTicketRequest = TBasicTicket & {
  amount: number;
  description?: string;
  has_limit: boolean;
  limit: number;
  form?: number;
  event?: TTickerEvent;
  sale_start_date?: string;
  sale_end_date?: string;
  message?: string;
  fee_paid_by_buyer?: boolean;
  allow_bulk_booking?: boolean;
  minimum_booking: number;
  maximum_booking: number;
  sequence: number;
};

/**
 * Ticket entity returned by the public and organiser APIs.
 */
export type TTicketResponse = TBasicTicket & {
  amount: number;
  gst_on_ticket: number;
  final_amount: number;
  description: string;
  has_limit: boolean;
  limit: number;
  form: TTickerForm;
  event: TTickerEvent;
  sale_start_date: string;
  sale_end_date: string;
  message: string;
  fee_paid_by_buyer: boolean;
  allow_bulk_booking: boolean;
  minimum_booking: number;
  maximum_booking: number;
  collect_individual_booking_information: boolean;
  platform_fee: TPlatformFee;
  ticket_price?: number;
  addons?: TTicketAddon[];
  remaining_tickets?: number;
  available_discounts?: TDiscountCoupon[];
  seat_configuration?: TSeatConfiguration;
  sequence: number;
};
