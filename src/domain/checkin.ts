import type { TBookingData, TBookingSummary } from "./booking.js";

export type TFirebaseScanLog = {
  id: number | string;
  scanned_at: number;
  scanned_by: string;
  status: string;
  booking_id: number | string;
  booking: TBookingData;
};

export type TFirebaseCheckinData = {
  id: number | string;
  scanned_at: number;
  scanned_by: string;
  status: string;
  booking_id: number | string;
  booking: TBookingData;
  scan_logs: Record<string, TFirebaseScanLog>;
};

export type TCheckinData = {
  [key: string]: {
    [key: string]: TFirebaseCheckinData;
  };
};

export type TCheckinRow = {
  checkPointId: string;
  bookingId: string;
  checkinData: TFirebaseCheckinData;
};

export type TCheckPoint = {
  id: number;
  name: string;
  allowed_tickets: {
    id: number;
    type: string;
  }[];
};

export type TCheckPointData = {
  checkpoints: TCheckPoint[];
};

export type TCheckPointResponse = {
  secret: string;
  checkpoints: {
    id: number;
    name: string;
  }[];
};

export type TCheckInDataProps = {
  eventId: number;
  checkPointIdMap?: Record<string, TCheckPoint>;
  bookingSummary?: TBookingSummary;
};

export type TQRCodeData = {
  booking_id: string;
  booking_token: string;
  jwt_token: string;
};
