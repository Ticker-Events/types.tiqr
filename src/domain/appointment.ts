/** ISO weekday abbreviation used in availability schedules. */
export type TDayOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

/**
 * Time interval within a day when bookings are accepted.
 */
export type TTimeSlot = {
  id?: number;
  start_time: string;
  end_time: string;
};

/**
 * Availability configuration for a single day of the week.
 */
export type TDailyAvailability = {
  id?: number;
  template?: number;
  day_of_week: TDayOfWeek;
  time_intervals: TTimeSlot[];
  max_bookings: number;
};

/**
 * Recurring weekly schedule template for a store's bookable services.
 */
export type TSchedule = {
  id: number;
  store: number;
  name: string;
  /** Slot length in minutes. */
  slot_duration: number;
  /** Buffer between consecutive slots in minutes. */
  buffer_time: number;
  booking_limit: number;
  daily_availabilities: TDailyAvailability[];
};

/**
 * One-off override that blocks or opens specific dates in a schedule.
 */
export type TScheduleOverride = {
  id: number;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  reason: string;
  is_available: boolean;
  is_active: boolean;
};

/**
 * Concrete bookable slot returned by the availability API.
 */
export type TTimeSlotResponse = {
  id: number;
  template: number;
  start_time: string;
  end_time: string;
  is_available: boolean;
  limit: number;
  confirmed_bookings: number;
};

/** @deprecated Use {@link TScheduleOverride} */
export type ScheduleOverride = TScheduleOverride;
