import type { TMetaData } from "../common/metadata.js";
import type { TAddress } from "./address.js";
import type { TBookedAddon, TProductOptionSnapshot } from "./product.js";
import type { TStore } from "./store.js";
import type { TUser } from "./user.js";
import type { TPayment } from "./payment.js";
import type { TTimeSlotResponse } from "./appointment.js";

export type TOrderLog = {
  new_status: string;
  created_at: string;
};

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

export type TShopMetaData = {
  courier_name: string;
  tracking_number: string;
  delivery_date: string;
};

export type TOrderStatusDetails = {
  description: string;
  label: string;
  className: string;
  status: string;
};

export type TOrderDetailsDrawer = {
  id: number;
  order_type: "appointment" | "product";
};

export type TOrderItem = {
  id: number;
  product_option_snapshot: TProductOptionSnapshot;
  quantity: number;
  amount: number;
  created_at: string;
};

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
};

export type TOrderDetails = TOrder & {
  total_duration: number;
};

export type TOrderDaysFilterOptions =
  | "today"
  | "last_week"
  | "last_month"
  | "last_year"
  | "all_time";

export type TOrderSummaryFilter = {
  startDate: string;
  endDate: string;
};
