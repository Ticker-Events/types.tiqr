import type { TPdfFile } from "../common/media.js";
import type { TPaymentMetaData } from "./payment.js";
import type { TBasicTicket, TTicketAddon, TTicketResponse } from "./ticket.js";
import type { TTickerEvent } from "./event.js";
import type { TTickerForm } from "./event-form.js";
import type { TUser } from "./user.js";

/** How a booking was created: paid online, recorded offline, or complimentary. */
export type TBookingType = "offline" | "online" | "complimentary";

/** Add-on selection included in a booking request. */
export type TBookingAddon = {
  addon: number;
  quantity: number;
};

/** Form answers submitted alongside a booking. */
export type TBookingFormData = {
  answers: unknown;
  form: TTickerForm;
};

/**
 * Payload for `POST participant/booking/` (single ticket checkout).
 */
export type TBookingCreatePayload = {
  ticket: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  quantity: number;
  meta_data?: unknown;
  applied_discount?: number | null;
  booking_addons?: TBookingAddon[];
  seats?: string[];
  referral_code?: string | null;
  callback_url?: string;
  custom_amount?: number;
};

/**
 * Payload for `POST participant/booking/bulk/`.
 */
export type TBulkBookingCreatePayload = {
  bookings: TBookingCreatePayload[];
  callback_url?: string;
};

/**
 * Response from booking create, bulk create, and retry payment.
 */
export type TBookingCreateResponse = {
  booking: TUserBooking;
  payment: TPaymentMetaData | Record<string, unknown> | null;
};

/**
 * Core booking fields used in check-in flows and booking creation.
 */
export type TBookingData = {
  id?: number;
  ticket: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  quantity: number;
  meta_data: unknown;
  applied_discount?: number | null;
  booking_addons: TBookingAddon[];
  seats?: string[];
  checkedInQty?: number;
  booking_type?: TBookingType;
  booking_id?: string;
  referral_code?: string | null;
  callback_url?: string;
  custom_amount?: number;
};

/** Itemised price breakdown for a ticket booking payment. */
export type TPaymentBreakdown = {
  ticket_unit_price: number;
  addon_amount: number;
  ticket_price: number;
  base_platform_fee: number;
  sgst: number;
  cgst: number;
  platform_fee: number;
  total: number;
  discount: number;
};

/** Payment record snapshot stored on a completed booking. */
export type TBookingPaymentSnapshot = {
  id: number;
  event: number;
  ticket: number;
  booking: number;
  status: string;
  amount: number;
  payment_breakdown: TPaymentBreakdown;
  callback_url: string;
};

/** Add-on line item frozen on a completed booking. */
export type TAddonBookingSnapshot = {
  addon: TTicketAddon;
  quantity: number;
};

/**
 * Full booking record returned to buyers and organisers.
 */
export type TUserBooking = {
  id?: number;
  uid: string;
  ticket: TBasicTicket;
  event: TTickerEvent;
  first_name: string;
  last_name: string;
  created_at: string;
  email: string;
  phone_number: string;
  status: string;
  meta_data: unknown;
  ticket_snapshot: TTicketResponse;
  booking_id: string;
  booking_token?: string;
  jwt_token?: string;
  quantity?: number;
  booking_addons?: TAddonBookingSnapshot[];
  payment: TBookingPaymentSnapshot;
  ticket_pdf?: TPdfFile;
  invoice_pdf?: TPdfFile;
  seats?: string[];
  user?: TUser;
  booked_by?: TUser;
  referred_by?: TUser;
  child_bookings?: TUserBooking[];
  booking_type: TBookingType;
  checksum?: string;
  false_code?: string;
  ticket_file?: {
    file: string;
    id: number;
  };
};

/** Response shape returned immediately after creating a booking. */
export type TBookingResponse = {
  id?: number;
  ticket: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  meta_data: unknown;
  booking_id: string;
};

/** Labelled row in a ticket price breakup display. */
export type TBreakupItem = {
  label: string;
  value: number;
  labelClass?: string;
  valueClass?: string;
};

/** Full ticket price breakup shown during checkout and in organiser reports. */
export type TBreakup = {
  ticketCost: TBreakupItem;
  amountYouGet: TBreakupItem;
  platformFee: TBreakupItem;
  gstOnPlatformFee: TBreakupItem;
  gstAmountOnTicket: TBreakupItem;
  totalTicketCost: TBreakupItem;
  discount: TBreakupItem;
  totalTicketCostBeforeDiscount: TBreakupItem;
  totalAddonCost?: TBreakupItem;
};

/** Aggregate booking counts for an event dashboard. */
export type TBookingSummary = {
  total_bookings: number;
  ticket_bookings: TBookingStats[];
};

/** Booking count for a single ticket type. */
export type TBookingStats = {
  ticket_type: string;
  count: number;
};

/** Aggregate payment totals for an event dashboard. */
export type TPaymentSummary = {
  total_amount: number;
  ticket_payments: TPaymentStats[];
};

/** Daily ticket sale count for revenue charts. */
export type TPaymentSummaryDayWise = {
  date_of_sale: string;
  count_today_ticket_Sale: number;
};

/** Payment totals grouped by ticket type and discount code. */
export type TPaymentStats = {
  applied_discount__code: string;
  count: number;
  booking_type: TBookingType;
  ticket_type: string;
  total_amount: number;
  total_payout: number;
};
