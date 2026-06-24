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

/** @deprecated Use TCalendarEvent */
export type CalendarEvent = TCalendarEvent;

export type TCalendarWeeklyViewProps = {
  startDate: Date;
  scheduleData?: unknown[];
};

export type TCalendarMonthlyViewProps = {
  scheduleData?: unknown[];
};

export type TCalendarMonthlyViewComponentProps = {
  scheduleData?: unknown[];
  startDate: Date;
};

export type TCalendarEventItemProps = {
  event: TCalendarEvent;
  onClick: (orderId: number) => void;
};

export type TCalendarDayProps = {
  date: Date;
  events: TCalendarEvent[];
  isCurrentMonth: boolean;
  isToday: boolean;
  onEventClick: (orderId: number) => void;
};

export type TPopoverStyles = {
  top: string;
  left: string;
};

export type TCalendarEventProps = {
  event: TCalendarEvent;
  gridRow: number;
  gridColumn: number;
  span: number;
  bgColor: string;
  onClick: (orderId: number) => void;
};

export type TCalendarEventsListProps = {
  events: TCalendarEvent[];
  getGridRowFromTime: (dateTimeStr: string) => number;
  getEventSpan: (event: TCalendarEvent) => number;
  getRandomBgColor: () => string;
  onEventClick: (orderId: number) => void;
};

export type TCalendarDateSelectorProps = {
  startDate: Date;
  onDateChange: (date: Date) => void;
};

export type TCalendarShimmerProps = {
  rows?: number;
};

export type TWeeklyCalendarShimmerProps = {
  className?: string;
};

export type TMobileViewProps = {
  scheduleData?: unknown[];
  startDate: Date;
};

export type TDesktopViewProps = {
  scheduleData?: unknown[];
  startDate: Date;
};

export type TMobileDayCellProps = {
  date: Date;
  events: TCalendarEvent[];
  isCurrentMonth: boolean;
  isToday: boolean;
  onEventClick: (orderId: number) => void;
};
