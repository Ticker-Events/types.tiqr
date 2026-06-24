import type { ReactNode } from "react";
import type { TStoreHomeData } from "../pages/storefront.js";
import type { TListResponse } from "../common/pagination.js";
import type { TProduct } from "../domain/product.js";

/** Props for the admin panel page header with optional action buttons. */
export type TAdminPanelHeaderProps = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
};

/** Props for the table loading shimmer skeleton. */
export type TShimmerTableProps = {
  rows?: number;
  columns?: number;
};

/** Props for the public store header component. */
export type TStoreHeaderProps = {
  data: TStoreHomeData;
};

/** Props for the horizontal product scroll on the store home page. */
export type TStoreProductsScrollViewProps = {
  products?: TListResponse<TProduct>;
};

/** Props for the product grid/list on the store home page. */
export type TProductsListProps = {
  productsList: TListResponse<TProduct>;
};

/** Props for a single cart line item with quantity controls. */
export type TCartItemProps = {
  item: {
    id: number;
    quantity: number;
    amount: number;
    product_option: {
      name: string;
      price: number;
      product: { name: string; images: { image: string }[] };
    };
  };
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
};
