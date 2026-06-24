import type { ReactNode } from "react";
import type { TTickerEvent } from "../domain/event.js";
import type { TUser } from "../domain/user.js";

/** Single item in a breadcrumb navigation trail. */
export type TCrumbItem = {
  href?: string;
  name: ReactNode;
};

/** Column definition for a data table widget. */
export type TTableHeader = {
  label: string;
  key: string;
};

/** Props for a generic table widget with dynamic columns. */
export type TTableWidgetProps = {
  headers: TTableHeader[];
  data: unknown[];
};

/** Props for the event collaborations management panel. */
export type TCollaborationsProps = {
  eventId: number;
  eventDetails: TTickerEvent;
};

/** Props for the main events app navigation bar. */
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
