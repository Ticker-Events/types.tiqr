/**
 * Appointment or order entry rendered on the store calendar views.
 */
export type TCalendarEvent = {
  order_id: number;
  name: string;
  time: string;
  datetime: string;
  href: string;
  start_date: string;
  end_date: string;
  dayIndex?: number;
  total_duration: number;
  status: string;
};

/** @deprecated Use {@link TCalendarEvent} */
export type CalendarEvent = TCalendarEvent;

/** Props for the weekly calendar view component. */
export type TCalendarWeeklyViewProps = {
  startDate: Date;
  scheduleData?: unknown[];
};

/** Props for the monthly calendar view component. */
export type TCalendarMonthlyViewProps = {
  scheduleData?: unknown[];
};

/** Props for the monthly calendar sub-component with a required start date. */
export type TCalendarMonthlyViewComponentProps = {
  scheduleData?: unknown[];
  startDate: Date;
};

/** Props for a single event chip in the calendar. */
export type TCalendarEventItemProps = {
  event: TCalendarEvent;
  onClick: (orderId: number) => void;
};

/** Props for a day cell in the monthly calendar grid. */
export type TCalendarDayProps = {
  date: Date;
  events: TCalendarEvent[];
  isCurrentMonth: boolean;
  isToday: boolean;
  onEventClick: (orderId: number) => void;
};

/** Absolute positioning styles for calendar event popovers. */
export type TPopoverStyles = {
  top: string;
  left: string;
};

/** Props for a positioned event block in the weekly time-grid. */
export type TCalendarEventProps = {
  event: TCalendarEvent;
  gridRow: number;
  gridColumn: number;
  span: number;
  bgColor: string;
  onClick: (orderId: number) => void;
};

/** Props for the list of events rendered inside a time column. */
export type TCalendarEventsListProps = {
  events: TCalendarEvent[];
  getGridRowFromTime: (dateTimeStr: string) => number;
  getEventSpan: (event: TCalendarEvent) => number;
  getRandomBgColor: () => string;
  onEventClick: (orderId: number) => void;
};

/** Props for the calendar week/date navigation control. */
export type TCalendarDateSelectorProps = {
  startDate: Date;
  onDateChange: (date: Date) => void;
};

/** Props for the calendar loading shimmer skeleton. */
export type TCalendarShimmerProps = {
  rows?: number;
};

/** Props for the weekly calendar shimmer skeleton. */
export type TWeeklyCalendarShimmerProps = {
  className?: string;
};

/** Props for the mobile calendar layout. */
export type TMobileViewProps = {
  scheduleData?: unknown[];
  startDate: Date;
};

/** Props for the desktop calendar layout. */
export type TDesktopViewProps = {
  scheduleData?: unknown[];
  startDate: Date;
};

/** Props for a single day cell in the mobile calendar. */
export type TMobileDayCellProps = {
  date: Date;
  events: TCalendarEvent[];
  isCurrentMonth: boolean;
  isToday: boolean;
  onEventClick: (orderId: number) => void;
};
