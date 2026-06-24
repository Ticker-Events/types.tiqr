import type { TListResponse } from "../common/pagination.js";
import type { TAddon, TCategory, TProduct, TProductOption } from "../domain/product.js";
import type { TStore } from "../domain/store.js";

/** Props for the product admin table. */
export type TProductTableProps = {
  products?: TListResponse<TProduct>;
};

/** Props for the product table column header row. */
export type TTableHeaderProps = {
  columns: string[];
};

/** Props for the product create/edit form fields. */
export type TProductFormFieldsProps = {
  product?: TProduct;
  store?: TStore;
};

/** Props for the product options (variants) section in the product form. */
export type TProductOptionsSectionProps = {
  options: TProductOption[];
  onChange: (options: TProductOption[]) => void;
};

/** Props for a single product option row in the product form. */
export type TProductOptionItemProps = {
  option: TProductOption;
  index: number;
  onUpdate: (index: number, option: TProductOption) => void;
  onRemove: (index: number) => void;
};

/** Props for the category admin table. */
export type TCategoryTableProps = {
  categories?: TListResponse<TCategory>;
};

/** Props for the add-on admin table. */
export type TAddonTableProps = {
  addons?: TListResponse<TAddon>;
};

/** Props for the FAQ drag-and-drop reorder modal. */
export type TFaqReorderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  faqs: { id: number; question: string }[];
  onReorder: (faqs: { id: number; question: string }[]) => void;
};
