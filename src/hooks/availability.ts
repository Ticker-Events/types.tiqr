import type { TDailyAvailability, TDayOfWeek, TTimeSlot } from "../domain/appointment.js";

/** Availability intervals for a single day in the legacy form format. */
export type TDayAvailability = {
  time_intervals: TTimeSlot[];
};

/**
 * Availability settings as returned by the legacy store settings API.
 */
export type TOriginalAvailability = {
  slot_duration: number;
  slot_unit: string;
  bookings_per_slot: number;
  buffer_duration: number;
  buffer_unit: string;
  min_time_before_booking: number;
  max_advance_days: string;
  max_bookings_per_day: string;
  daily_availabilities: {
    [key: string]: TDayAvailability;
  };
};

/**
 * Normalised availability payload sent to the schedule API.
 */
export type TConvertedAvailability = {
  store: number;
  name: string;
  slot_duration: number;
  buffer_time: number;
  booking_limit: number;
  max_advance_days: string;
  min_time_before_booking: number;
  daily_availabilities: TDailyAvailability[];
};

/** Maps weekday abbreviations to numeric day indices. */
export type TAvailabilityDayMapping = {
  [key in TDayOfWeek]?: number;
};
