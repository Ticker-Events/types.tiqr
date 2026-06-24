import type { TDailyAvailability, TDayOfWeek, TTimeSlot } from "../domain/appointment.js";

export type TDayAvailability = {
  time_intervals: TTimeSlot[];
};

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

export type TAvailabilityDayMapping = {
  [key in TDayOfWeek]?: number;
};
