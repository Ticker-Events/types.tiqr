import type { TProductOption } from "../domain/product.js";

/** Props for the product option radio selector on the PDP. */
export type TProductOptionRadioViewProps = {
  options: TProductOption[];
  selectedProductOption: TProductOption | null;
  onSelect: (option: TProductOption) => void;
  currency: string;
};

/** Props for the product option quantity picker on the PDP. */
export type TProductOptionQuantityViewProps = {
  options: TProductOption[];
  quantities: Record<number, number>;
  onQuantityChange: (optionId: number, quantity: number) => void;
  currency: string;
};

/** Props for add-to-cart / buy-now action buttons on the PDP. */
export type TProductActionButtonsProps = {
  productType: string;
  hasOptionQuantityPicker: boolean;
  hasSelectedQuantities: boolean;
  isActionInProgress: boolean;
  isAddingToCart: boolean;
  isBuyingNow: boolean;
  selectedProductOption: TProductOption | null;
  onAddToCart: () => void;
  onBuyNow: () => void;
  className?: string;
};

/** Props for the sticky mobile action bar on the PDP. */
export type TProductMobileActionBarProps = {
  productType: string;
  hasOptionQuantityPicker: boolean;
  hasSelectedQuantities: boolean;
  isActionInProgress: boolean;
  isAddingToCart: boolean;
  isBuyingNow: boolean;
  selectedProductOption: TProductOption | null;
  onAddToCart: () => void;
  onBuyNow: () => void;
  minPriceLabel: string;
};
