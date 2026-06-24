export type TDayOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

export type TTimeSlot = {
  id?: number;
  start_time: string;
  end_time: string;
};

export type TDailyAvailability = {
  id?: number;
  template?: number;
  day_of_week: TDayOfWeek;
  time_intervals: TTimeSlot[];
  max_bookings: number;
};

export type TSchedule = {
  id: number;
  store: number;
  name: string;
  slot_duration: number;
  buffer_time: number;
  booking_limit: number;
  daily_availabilities: TDailyAvailability[];
};

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

export type TTimeSlotResponse = {
  id: number;
  template: number;
  start_time: string;
  end_time: string;
  is_available: boolean;
  limit: number;
  confirmed_bookings: number;
};

/** @deprecated Use TScheduleOverride */
export type ScheduleOverride = TScheduleOverride;
