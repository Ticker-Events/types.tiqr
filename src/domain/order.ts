import type { TMetaData } from "../common/metadata.js";
import type { TAddress } from "./address.js";
import type { TBookedAddon, TProductOptionSnapshot } from "./product.js";
import type { TStore } from "./store.js";
import type { TUser } from "./user.js";
import type { TPayment } from "./payment.js";
import type { TTimeSlotResponse } from "./appointment.js";

/** How a product order is fulfilled. */
export type TDeliveryMode =
  | "PICKUP_FROM_STORE"
  | "DELIVERY_TO_LOCATION";

/** Single status-change entry in an order audit log. */
export type TOrderLog = {
  new_status: string;
  created_at: string;
};

/** Buyer-supplied metadata captured during checkout. */
export type TBuyerMetaData = {
  notes: string;
  phone: string;
  shipping_address?: TAddress;
  billing_address?: TAddress;
  start_time: string;
  end_time: string;
  slot: string;
  formatted_address?: string;
  [key: string]: unknown;
};

/** Fulfillment metadata added by the store after dispatch. */
export type TShopMetaData = {
  courier_name: string;
  tracking_number: string;
  delivery_date: string;
};

/** UI presentation config for a given order status. */
export type TOrderStatusDetails = {
  description: string;
  label: string;
  className: string;
  status: string;
};

/** Minimal order identity used when opening the order details drawer. */
export type TOrderDetailsDrawer = {
  id: number;
  order_type: "appointment" | "product";
};

/** Line item on a store order. */
export type TOrderItem = {
  id: number;
  product_option_snapshot: TProductOptionSnapshot;
  quantity: number;
  amount: number;
  created_at: string;
};

/**
 * Full store order including items, payment, and scheduling data.
 */
export type TOrder = TOrderDetailsDrawer & {
  uuid: string;
  display_uid: string;
  ordered_by: TUser;
  ordered_for: TUser;
  status: string;
  amount: number;
  buyer_meta_data: TBuyerMetaData;
  store_meta_data: TMetaData;
  items: TOrderItem[];
  created_at: string;
  logs: TOrderLog[];
  store: TStore;
  address: TAddress;
  total_amount: number;
  payment: TPayment;
  addons: TBookedAddon[];
  time_slots: TTimeSlotResponse[];
  total_duration: number;
  start_time: string;
  end_time: string;
  /** Fulfillment method selected at checkout. */
  delivery_mode?: TDeliveryMode;
};

/** Order with guaranteed `total_duration` for detail views. */
export type TOrderDetails = TOrder & {
  total_duration: number;
};

/** Preset date-range filter for order summary reports. */
export type TOrderDaysFilterOptions =
  | "today"
  | "last_week"
  | "last_month"
  | "last_year"
  | "all_time";

/** Custom date-range filter for order summary reports. */
export type TOrderSummaryFilter = {
  startDate: string;
  endDate: string;
};
