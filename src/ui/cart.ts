import type { TCart } from "../domain/cart.js";

/** Props for the cart summary panel inside the cart modal. */
export type TCartSummaryProps = {
  cartData?: TCart;
  values: {
    cart_items?: {
      quantity?: number;
      product_option?: { id?: number; price?: number };
    }[];
  };
  removedOptionIds?: number[];
  deletingOptionIds?: number[];
  onDeleteCartItem: (productOptionIndex: number) => void;
  onContinueShopping?: () => void;
  isLoading?: boolean;
};

/** Props for the cart modal drawer. */
export type TCartModalProps = {
  isCartOpen: boolean;
  onCartOpenChange: (open: boolean) => void;
  cartData?: TCart;
  isLoading?: boolean;
  onCheckout?: () => void;
  onDeleteCartItem?: (productOptionIndex: number) => void;
  checkoutUrl?: string;
};
