import type { TProductOption } from "./product.js";

export type TCartItem = {
  id: number;
  quantity: number;
  amount: number;
  product_option: TProductOption;
};

export type TCart = {
  amount: number;
  store: number;
  cart_items: TCartItem[];
};
