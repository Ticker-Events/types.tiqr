import type { ComponentType, ReactNode } from "react";

/** A single navigation link in the buyer navbar. */
export type TBuyerNavItem = {
  label: string;
  url: string;
  icon?: ComponentType<{ className?: string }>;
};

/** Props for the buyer-facing storefront navbar. */
export type TBuyerNavbarProps = {
  user?: {
    displayName?: string;
    photoURL?: string;
  } | null;
  isUserLoading?: boolean;
  hideCart?: boolean;
  className?: string;
  cartItemCount?: number;
  onCartOpen?: () => void;
  navigation?: TBuyerNavItem[];
  accountMenu?: TBuyerNavItem[][];
  cartModal?: ReactNode;
};
