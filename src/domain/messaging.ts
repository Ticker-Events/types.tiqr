/**
 * File attachment on a WhatsApp chat message.
 */
export type TChatFile = {
  id: number;
  file_upload: string;
  type: string;
};

/**
 * WhatsApp contact with last-message preview for the inbox list.
 */
export type TChatUser = {
  id: number;
  last_message_info: {
    last_message_at: number;
    message: {
      timestamp: number;
      content: {
        mime_type: string;
        filename: string | null;
        link: string;
        caption: string | null;
        id: string;
      };
      type: string;
      externalId: string;
      direction: "in" | "out";
      status: string;
      messageId: number;
      lastReceivedAt: string;
      contactId: number;
    };
    last_received_message_at: number;
  };
  personal_info: {
    last_name: string;
    first_name: string;
    phone_number: string;
  };
};

/**
 * Individual WhatsApp message in a conversation thread.
 */
export type TMessage = {
  id: string;
  contactId: number;
  content: {
    caption?: string | null;
    filename?: string | null;
    id?: string;
    link?: string;
    mime_type?: string;
    body?: string;
    preview_url?: null;
    button_reply?: {
      id: string;
      title: string;
      type: string;
    } | null;
    list_reply?: {
      description: string;
      id: string;
      title: string;
      type: string;
    } | null;
    type?: string;
    address?: string | null;
    latitude?: number;
    longitude?: number;
    name?: string | null;
  };
  direction: "in" | "out";
  externalId: string;
  lastReceivedAt: string;
  messageId: number;
  status: string;
  timestamp: number;
  type: "interactive" | "location" | string;
};
