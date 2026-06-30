import type { TCartItem } from "../domain/cart.js";
import type { TCheckoutPageProps } from "../pages/storefront.js";

/** Props for a single line item in the checkout order summary. */
export type TCheckoutItemProps = {
  cartItem: TCartItem;
  itemIndex: number;
  checkoutFrom: string;
  isDeleting?: boolean;
  onDelete: (index: number) => void;
  onQuantityChange?: (index: number, quantity: number) => void;
};

/** Props for the checkout order summary sidebar. */
export type TCheckoutOrderSummaryProps = {
  checkoutData: TCheckoutPageProps;
  values: Record<string, unknown>;
  submitting?: boolean;
  onDeleteItem?: (index: number) => void;
};
