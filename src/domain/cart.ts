import type { TProductOption } from "./product.js";

/**
 * Single line item in a shopping cart.
 */
export type TCartItem = {
  id: number;
  quantity: number;
  amount: number;
  product_option: TProductOption;
};

/**
 * Active cart for a store session before checkout.
 */
export type TCart = {
  amount: number;
  store: number;
  cart_items: TCartItem[];
};
