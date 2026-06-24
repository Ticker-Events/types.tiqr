import type { RefObject } from "react";
import type { TCalendarEvent } from "../calendar/events.js";

/** Input props for the `useWeeklyCalendarView` hook. */
export type TUseWeeklyCalendarViewProps = {
  startDate: Date;
  scheduleData?: unknown[];
};

/** Return value of the `useWeeklyCalendarView` hook. */
export type TUseWeeklyCalendarViewReturn = {
  container: RefObject<HTMLDivElement | null>;
  containerNav: RefObject<HTMLDivElement | null>;
  containerOffset: RefObject<HTMLDivElement | null>;
  getGridRowFromTime: (dateTimeStr: string) => number;
  getEventSpan: (event: TCalendarEvent) => number;
  getRandomBgColor: () => string;
  getEventsForTheWeek: (startDate: Date) => TCalendarEvent[];
};

/** Input props for the `useMonthlyCalendarView` hook. */
export type TUseMonthlyCalendarViewProps = {
  scheduleData?: unknown[];
};

/** Return value of the `useMonthlyCalendarView` hook. */
export type TUseMonthlyCalendarViewReturn = {
  rowsNeeded: number;
  handleEventClick: (orderId: number) => void;
};

/** Input props for the `useCalendarDateSelection` hook. */
export type TUseCalendarDateSelectionProps = {
  initialStartDate: Date;
};

/** Return value of the `useCalendarDateSelection` hook. */
export type TUseCalendarDateSelectionReturn = {
  getDayName: (date: Date, short?: boolean) => string;
  formatDate: (date: Date) => number;
  isToday: (date: Date) => boolean;
  getDateForIndex: (index: number) => Date;
};
