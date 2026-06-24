import type { ReactNode } from "react";
import type { TStoreHomeData } from "../pages/storefront.js";
import type { TListResponse } from "../common/pagination.js";
import type { TProduct } from "../domain/product.js";

export type TAdminPanelHeaderProps = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
};

export type TShimmerTableProps = {
  rows?: number;
  columns?: number;
};

export type TStoreHeaderProps = {
  data: TStoreHomeData;
};

export type TStoreProductsScrollViewProps = {
  products?: TListResponse<TProduct>;
};

export type TProductsListProps = {
  productsList: TListResponse<TProduct>;
};

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
