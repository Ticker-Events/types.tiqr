import type { TImageMedia, TPdfFile } from "../common/media.js";
import type { TBasicTicket, TTicketAddon, TTicketResponse } from "./ticket.js";
import type { TTickerEvent } from "./event.js";
import type { TTickerForm } from "./event-form.js";
import type { TUser } from "./user.js";

export type TBookingType = "offline" | "online" | "complimentary";

export type TBookingAddon = {
  addon: number;
  quantity: number;
};

export type TBookingFormData = {
  answers: unknown;
  form: TTickerForm;
};

export type TBookingData = {
  id?: number;
  ticket: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  quantity: number;
  meta_data: unknown;
  applied_discount: number;
  booking_addons: TBookingAddon[];
  seats?: string[];
  checkedInQty?: number;
  booking_type: TBookingType;
  booking_id: string;
};

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

export type TAddonBookingSnapshot = {
  addon: TTicketAddon;
  quantity: number;
};

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

export type TBreakupItem = {
  label: string;
  value: number;
  labelClass?: string;
  valueClass?: string;
};

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

export type TBookingSummary = {
  total_bookings: number;
  ticket_bookings: TBookingStats[];
};

export type TBookingStats = {
  ticket_type: string;
  count: number;
};

export type TPaymentSummary = {
  total_amount: number;
  ticket_payments: TPaymentStats[];
};

export type TPaymentSummaryDayWise = {
  date_of_sale: string;
  count_today_ticket_Sale: number;
};

export type TPaymentStats = {
  applied_discount__code: string;
  count: number;
  booking_type: TBookingType;
  ticket_type: string;
  total_amount: number;
  total_payout: number;
};
