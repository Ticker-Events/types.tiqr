import type { ReactNode } from "react";

/** Supported design system identifiers for @tiqr/ui. */
export type TDesignSystemId = "tiqr-default" | "luxury";

export type TStoreRouteEntity = { id: number; name?: string | null };
export type TProductRouteEntity = { id: number; name?: string | null };
export type TOrderRouteEntity = { uuid: string };

/** Passed to custom route builders from {@link TRouteConfig}. */
export type TRouteUrlContext = {
  routes: TRouteConfig;
  fullUrl: boolean;
};

/** Injectable route config so storefront components stay app-agnostic. */
export type TRouteConfig = {
  baseUrl?: string;
  storePath?: string;
  productPath?: string;
  singleStore?: boolean;
  trailingSlash?: boolean;
  buildStoreUrl?: (store: TStoreRouteEntity, context: TRouteUrlContext) => string;
  buildProductUrl?: (
    store: TStoreRouteEntity,
    product: TProductRouteEntity,
    context: TRouteUrlContext
  ) => string;
  buildOrderUrl?: (order: TOrderRouteEntity, context: TRouteUrlContext) => string;
  auth?: {
    login?: string;
    signup?: string;
    logout?: string;
    forgotPassword?: string;
  };
  orders?: string;
  checkout?: string;
  manage?: string;
  account?: string;
};

/** Props for the design system React context provider. */
export type TDesignSystemProviderProps = {
  designSystem?: TDesignSystemId;
  routes?: Partial<TRouteConfig>;
  children: ReactNode;
};
