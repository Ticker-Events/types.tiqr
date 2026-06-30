import type { TProduct } from "../domain/product.js";
import type { TStore } from "../domain/store.js";

/** Builds a product detail URL for the host app. */
export type TGetProductUrl = (product: TProduct, store?: TStore) => string;

/** Builds a store home URL for the host app. */
export type TGetStoreUrl = (store: TStore) => string;

/** Builds an order detail URL for the host app. */
export type TGetOrderUrl = (order: { uuid: string }) => string;
