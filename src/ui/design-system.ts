import type { ReactNode } from "react";

/** Supported design system identifiers for @tiqr/ui. */
export type TDesignSystemId = "tiqr-default" | "luxury";

/** Static in-app paths for auth and checkout flows. */
export type TRouteConfig = {
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
  home?: string;
};

/** Props for the design system React context provider. */
export type TDesignSystemProviderProps = {
  designSystem?: TDesignSystemId;
  routes?: Partial<TRouteConfig>;
  children: ReactNode;
};
