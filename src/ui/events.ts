import type { ReactNode } from "react";
import type { TTickerEvent } from "../domain/event.js";
import type { TUser } from "../domain/user.js";

export type TCrumbItem = {
  href?: string;
  name: ReactNode;
};

export type TTableHeader = {
  label: string;
  key: string;
};

export type TTableWidgetProps = {
  headers: TTableHeader[];
  data: unknown[];
};

export type TCollaborationsProps = {
  eventId: number;
  eventDetails: TTickerEvent;
};

export type TNavbarProps = {
  active?: number;
  mode?: string;
  isLogoHidden?: boolean;
  isNavbarMenuHidden?: boolean;
  hasSidebarButton?: boolean;
  setSidebarVisibility?: (visible: boolean) => void;
  children?: ReactNode;
  user?: TUser | null;
};
