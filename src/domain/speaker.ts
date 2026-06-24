import type { TImageMedia } from "../common/media.js";

export type TSpeakerResponse = {
  name: string;
  description: string;
  image?: TImageMedia;
};

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
