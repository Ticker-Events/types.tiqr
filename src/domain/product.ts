import type { TFileMedia, TImageMedia } from "../common/media.js";
import type { TStore } from "./store.js";

/** Whether a catalog item is a physical product or a bookable service. */
export type TProductType = "product" | "service";

/**
 * Optional add-on that can be purchased alongside a product or service.
 */
export type TAddon = {
  id?: number;
  name: string;
  description?: string;
  price: number;
  duration?: number;
  is_active?: boolean;
  images?: TFileMedia[];
  min_quantity?: number;
  max_quantity?: number;
};

/**
 * Product category used for grouping and filtering in a store catalog.
 */
export type TCategory = {
  id?: number;
  name: string;
  description?: string;
  store?: TStore;
  image?: TImageMedia;
  meta_data?: Record<string, unknown>;
};

/**
 * Product or service listed in a TiQr store catalog.
 */
export type TProduct = {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  images: TFileMedia[];
  options: TProductOption[];
  long_description: string;
  store: TStore;
  /** Duration in minutes for service-type products. */
  duration: number;
  min_price: number;
  tags?: string[];
  type: TProductType;
};

/** Product with related addons and categories expanded. */
export type TProductDetails = TProduct & {
  addons?: TAddon[];
  categories?: TCategory[];
};

/**
 * Purchasable variant of a product (e.g. size, duration tier).
 */
export type TProductOption = {
  id?: number;
  name: string;
  price: number;
  product: TProductDetails;
  is_active?: boolean;
  sequence?: number;
  is_deleted?: boolean;
  tags?: string[];
  description?: string;
  duration?: number;
};

/** Payload for creating or updating a product via the admin API. */
export type TProductPayload = {
  id: number;
  name: string;
  description: string;
  long_description: string;
  is_active: boolean;
  images: TFileMedia[];
  options: TProductOption[];
  addons: number[];
  categories: number[];
  duration: number;
  tags?: string[];
  type: TProductType;
};

/** Frozen product option state stored on a completed order. */
export type TProductOptionSnapshot = TProductOption & {
  product: TProductDetails;
};

/** Add-on line item attached to a completed order. */
export type TBookedAddon = {
  id: number;
  quantity: number;
  amount: number;
  addon: TAddon;
  created_at: string;
};
