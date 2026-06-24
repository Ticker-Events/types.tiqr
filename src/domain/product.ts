import type { TFileMedia, TImageMedia } from "../common/media.js";
import type { TStore } from "./store.js";

export type TProductType = "product" | "service";

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

export type TCategory = {
  id?: number;
  name: string;
  description?: string;
  store?: TStore;
  image?: TImageMedia;
  meta_data?: Record<string, unknown>;
};

export type TProduct = {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  images: TFileMedia[];
  options: TProductOption[];
  long_description: string;
  store: TStore;
  duration: number;
  min_price: number;
  tags?: string[];
  type: TProductType;
};

export type TProductDetails = TProduct & {
  addons?: TAddon[];
  categories?: TCategory[];
};

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

export type TProductOptionSnapshot = TProductOption & {
  product: TProductDetails;
};

export type TBookedAddon = {
  id: number;
  quantity: number;
  amount: number;
  addon: TAddon;
  created_at: string;
};
