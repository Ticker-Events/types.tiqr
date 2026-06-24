import type { TImageMedia } from "../common/media.js";

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

export type TAttendeeProfileWrite = {
  name: string;
  phone_number: string;
  email: string;
  title: string;
  organization: string;
  bio: string;
  profile_picture?: number;
};
