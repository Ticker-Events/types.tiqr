import type { TListResponse } from "../common/pagination.js";
import type { TCart } from "../domain/cart.js";
import type { TProduct, TProductDetails, TProductOption } from "../domain/product.js";
import type { TStore } from "../domain/store.js";

export type TStoreHomeData = {
  error: boolean;
  store?: TStore;
  products?: TListResponse<TProduct>;
};

export type TProductDetailsPageProps = {
  productData: TProductDetails;
  store: TStore;
  storeProducts?: TListResponse<TProduct>;
};

export type TCheckoutPageProps = {
  optionsData: TProductOption[];
  checkoutFrom: "cart" | "product";
  cartData?: TCart;
};

export type TStoreHomePageProps = {
  params: Promise<{ storeName: string }>;
};

export type TProductPageProps = {
  params: Promise<{ storeName: string; productName: string }>;
};

export type TLogoutPageProps = Record<string, never>;
