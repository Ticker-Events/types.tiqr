import type { ReactNode } from "react";

/** Supported design system identifiers for @tiqr/ui. */
export type TDesignSystemId = "tiqr-default";

/** Injectable route builders so storefront components stay app-agnostic. */
export type TRouteConfig = {
  baseUrl?: string;
  storePath?: string;
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
