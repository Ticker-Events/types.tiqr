import type { RefObject } from "react";
import type { TCalendarEvent } from "../calendar/events.js";

export type TUseWeeklyCalendarViewProps = {
  startDate: Date;
  scheduleData?: unknown[];
};

export type TUseWeeklyCalendarViewReturn = {
  container: RefObject<HTMLDivElement | null>;
  containerNav: RefObject<HTMLDivElement | null>;
  containerOffset: RefObject<HTMLDivElement | null>;
  getGridRowFromTime: (dateTimeStr: string) => number;
  getEventSpan: (event: TCalendarEvent) => number;
  getRandomBgColor: () => string;
  getEventsForTheWeek: (startDate: Date) => TCalendarEvent[];
};

export type TUseMonthlyCalendarViewProps = {
  scheduleData?: unknown[];
};

export type TUseMonthlyCalendarViewReturn = {
  rowsNeeded: number;
  handleEventClick: (orderId: number) => void;
};

export type TUseCalendarDateSelectionProps = {
  initialStartDate: Date;
};

export type TUseCalendarDateSelectionReturn = {
  getDayName: (date: Date, short?: boolean) => string;
  formatDate: (date: Date) => number;
  isToday: (date: Date) => boolean;
  getDateForIndex: (index: number) => Date;
};
