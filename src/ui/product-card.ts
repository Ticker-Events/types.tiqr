import type { TProduct } from "../domain/product.js";
import type { TStore } from "../domain/store.js";

/** Props for a product card in the store catalog grid. */
export type TProductCardProps = {
  product: TProduct;
  store?: TStore;
  hideOptions?: boolean;
  hidePrice?: boolean;
  productUrl?: string;
};
