import type { TImageMedia } from "../common/media.js";

/** Speaker profile displayed on an event landing page. */
export type TSpeakerResponse = {
  name: string;
  description: string;
  image?: TImageMedia;
};

/**
 * Props for the speaker create/edit modal in the organiser dashboard.
 */
export type TSpeakerRequest = {
  eventId: string;
  speaker?: {
    id: string;
    name: string;
    biography: string;
    social_media_links?: {
      instagram?: string;
      facebook?: string;
      linkedin?: string;
    };
    profile_picture?: {
      image: string;
      id: string;
    };
  };
  onClose: () => void;
  onSuccess: () => void;
};
