import type { Dispatch, SetStateAction } from "react";
import type { TSortOptionsKey } from "../constants/order-sort.js";
import type { TListResponse } from "../common/pagination.js";
import type { TOrder } from "../domain/order.js";

/** Props for the order list table view in the admin panel. */
export type TOrderListViewProps = {
  sortBy: TSortOptionsKey;
  setSortBy: (val: TSortOptionsKey) => void;
  orders?: TListResponse<TOrder>;
};

/** Props for the order filter bar (sort, status, date range, search). */
export type TOrderFilterProps = {
  sortBy: TSortOptionsKey;
  setSortBy: Dispatch<SetStateAction<TSortOptionsKey>>;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  daysFilter: string;
  setDaysFilter: (days: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

/** Props for a kanban column that accepts dropped order cards. */
export type TDroppableStatusSectionProps = {
  status: string;
  orders: TOrder[] | undefined;
  setOrder: (order: TOrder) => void;
  setIsDrawerOpen: (isOpen: boolean) => void;
};

/** Props for a draggable order card in the kanban view. */
export type TDraggableOrderProps = {
  order: TOrder;
  setOrder: (order: TOrder) => void;
  setIsDrawerOpen: (isOpen: boolean) => void;
};

/** Props for the order management drawer header. */
export type TManageOrderFormHeaderProps = {
  order?: TOrder;
  handleOnClose: () => void;
};

/** Props for a single line item in the order management drawer. */
export type TManageOrderFormOrderItemProps = {
  item: TOrder["items"][number];
};

/** Props for a single add-on row in the order management drawer. */
export type TManageOrderFormAddonItemProps = {
  addon: TOrder["addons"][number];
};

/** Props for the close/duplicate action buttons in the order drawer. */
export type TCloseActionsButtonProps = {
  onClose: () => void;
  onDuplicate: () => void;
};

/** React context value for persisting order list query parameters. */
export type TOrdersParamsContextType = {
  params: Record<string, unknown>;
  setParams: (params: Record<string, unknown>) => void;
};

/** Props for the list/kanban view toggle control. */
export type TViewToggleProps = {
  view: string;
  setView: (view: string) => void;
};

/** Props for the order kanban board view. */
export type TOrderKanbanViewProps = {
  orders?: TListResponse<TOrder>;
};

/** Props for a compact order summary card. */
export type TOrderCardProps = {
  order: TOrder;
};

/** Props for a line item in the buyer-facing order view. */
export type TBuyerOrderItemProps = {
  item: TOrder["items"][number];
};

/** Props for the buyer-facing order page header. */
export type TBuyerOrderHeaderProps = {
  order: TOrder;
};

/** Props for the order status progress tracker. */
export type TOrderStatusTrackerProps = {
  order: TOrder;
};

/** Props for the order totals summary section. */
export type TOrderSummaryProps = {
  orderDetails: TOrder;
};

/** Props for the expanded order item detail panel. */
export type TOrderItemDetailsProps = {
  orderItem: TOrder["items"][number];
};

/** Props for a single item in the alert/notification centre. */
export type TAlertCenterItemProps = {
  title: string;
  description: string;
  time: string;
  type: string;
  onClick?: () => void;
};
