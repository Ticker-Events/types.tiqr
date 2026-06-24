import type { TListResponse } from "../common/pagination.js";
import type { TCart } from "../domain/cart.js";
import type { TProduct, TProductDetails, TProductOption } from "../domain/product.js";
import type { TStore } from "../domain/store.js";

/** Server-side data for a store home page. */
export type TStoreHomeData = {
  error: boolean;
  store?: TStore;
  products?: TListResponse<TProduct>;
};

/** Server-side props for a product detail page. */
export type TProductDetailsPageProps = {
  productData: TProductDetails;
  store: TStore;
  storeProducts?: TListResponse<TProduct>;
};

/** Server-side props for the checkout page. */
export type TCheckoutPageProps = {
  optionsData: TProductOption[];
  checkoutFrom: "cart" | "product";
  cartData?: TCart;
};

/** Next.js page props for the store home route. */
export type TStoreHomePageProps = {
  params: Promise<{ storeName: string }>;
};

/** Next.js page props for the product detail route. */
export type TProductPageProps = {
  params: Promise<{ storeName: string; productName: string }>;
};

/** Next.js page props for the logout route (no params). */
export type TLogoutPageProps = Record<string, never>;
