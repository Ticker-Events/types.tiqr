import type { TImageMedia } from "../common/media.js";

/**
 * Attendee networking profile visible to other event participants.
 */
export type TAttendeeProfile = {
  id: number;
  user_id: number;
  name: string;
  phone_number: string;
  email: string;
  profile_picture: TImageMedia;
  title: string;
  organization: string;
  bio: string;
};

/** Payload for creating or updating an attendee profile. */
export type TAttendeeProfileWrite = {
  name: string;
  phone_number: string;
  email: string;
  title: string;
  organization: string;
  bio: string;
  /** Media ID of the uploaded profile picture. */
  profile_picture?: number;
};
