import type { TListResponse } from "../common/pagination.js";
import type { TAddon, TCategory, TProduct, TProductOption } from "../domain/product.js";
import type { TStore } from "../domain/store.js";

export type TProductTableProps = {
  products?: TListResponse<TProduct>;
};

export type TTableHeaderProps = {
  columns: string[];
};

export type TProductFormFieldsProps = {
  product?: TProduct;
  store?: TStore;
};

export type TProductOptionsSectionProps = {
  options: TProductOption[];
  onChange: (options: TProductOption[]) => void;
};

export type TProductOptionItemProps = {
  option: TProductOption;
  index: number;
  onUpdate: (index: number, option: TProductOption) => void;
  onRemove: (index: number) => void;
};

export type TCategoryTableProps = {
  categories?: TListResponse<TCategory>;
};

export type TAddonTableProps = {
  addons?: TListResponse<TAddon>;
};

export type TFaqReorderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  faqs: { id: number; question: string }[];
  onReorder: (faqs: { id: number; question: string }[]) => void;
};
