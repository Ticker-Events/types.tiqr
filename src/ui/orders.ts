import type { Dispatch, SetStateAction } from "react";
import type { TSortOptionsKey } from "../constants/order-sort.js";
import type { TListResponse } from "../common/pagination.js";
import type { TOrder } from "../domain/order.js";

export type TOrderListViewProps = {
  sortBy: TSortOptionsKey;
  setSortBy: (val: TSortOptionsKey) => void;
  orders?: TListResponse<TOrder>;
};

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

export type TDroppableStatusSectionProps = {
  status: string;
  orders: TOrder[] | undefined;
  setOrder: (order: TOrder) => void;
  setIsDrawerOpen: (isOpen: boolean) => void;
};

export type TDraggableOrderProps = {
  order: TOrder;
  setOrder: (order: TOrder) => void;
  setIsDrawerOpen: (isOpen: boolean) => void;
};

export type TManageOrderFormHeaderProps = {
  order?: TOrder;
  handleOnClose: () => void;
};

export type TManageOrderFormOrderItemProps = {
  item: TOrder["items"][number];
};

export type TManageOrderFormAddonItemProps = {
  addon: TOrder["addons"][number];
};

export type TCloseActionsButtonProps = {
  onClose: () => void;
  onDuplicate: () => void;
};

export type TOrdersParamsContextType = {
  params: Record<string, unknown>;
  setParams: (params: Record<string, unknown>) => void;
};

export type TViewToggleProps = {
  view: string;
  setView: (view: string) => void;
};

export type TOrderKanbanViewProps = {
  orders?: TListResponse<TOrder>;
};

export type TOrderCardProps = {
  order: TOrder;
};

export type TBuyerOrderItemProps = {
  item: TOrder["items"][number];
};

export type TBuyerOrderHeaderProps = {
  order: TOrder;
};

export type TOrderStatusTrackerProps = {
  order: TOrder;
};

export type TOrderSummaryProps = {
  orderDetails: TOrder;
};

export type TOrderItemDetailsProps = {
  orderItem: TOrder["items"][number];
};

export type TAlertCenterItemProps = {
  title: string;
  description: string;
  time: string;
  type: string;
  onClick?: () => void;
};
