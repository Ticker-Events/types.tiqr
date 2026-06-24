import type { TBookingData, TBookingSummary } from "./booking.js";

/**
 * Single scan attempt logged in Firebase during event check-in.
 */
export type TFirebaseScanLog = {
  id: number | string;
  scanned_at: number;
  scanned_by: string;
  status: string;
  booking_id: number | string;
  booking: TBookingData;
};

/**
 * Check-in record stored in Firebase Realtime Database.
 */
export type TFirebaseCheckinData = {
  id: number | string;
  scanned_at: number;
  scanned_by: string;
  status: string;
  booking_id: number | string;
  booking: TBookingData;
  scan_logs: Record<string, TFirebaseScanLog>;
};

/**
 * Nested check-in map keyed by checkpoint ID then booking ID.
 */
export type TCheckinData = {
  [key: string]: {
    [key: string]: TFirebaseCheckinData;
  };
};

/** Flattened row for rendering a check-in in a data table. */
export type TCheckinRow = {
  checkPointId: string;
  bookingId: string;
  checkinData: TFirebaseCheckinData;
};

/** Check-in checkpoint with allowed ticket types. */
export type TCheckPoint = {
  id: number;
  name: string;
  allowed_tickets: {
    id: number;
    type: string;
  }[];
};

/** List of checkpoints configured for an event. */
export type TCheckPointData = {
  checkpoints: TCheckPoint[];
};

/** API response when fetching checkpoint configuration and secrets. */
export type TCheckPointResponse = {
  secret: string;
  checkpoints: {
    id: number;
    name: string;
  }[];
};

/** Props for the live check-in dashboard component. */
export type TCheckInDataProps = {
  eventId: number;
  checkPointIdMap?: Record<string, TCheckPoint>;
  bookingSummary?: TBookingSummary;
};

/** Payload encoded in event entry QR codes. */
export type TQRCodeData = {
  booking_id: string;
  booking_token: string;
  jwt_token: string;
};
