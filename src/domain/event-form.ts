import type { TTickerEvent } from "./event.js";
import type { TUser } from "./user.js";

export type TTickerOption = {
  id: string;
  value: string;
};

export type TQuestionSection = {
  id: string;
  title: string;
  take_after_submission: boolean;
};

export type TQuestionCondition = {
  check: string;
  key: string;
  value: unknown;
};

export type TTickerQuestion = {
  id: string;
  title: string;
  type: string;
  options: TTickerOption[];
  validations: string[];
  description?: string;
  section?: string;
  conditions?: TQuestionCondition[];
};

export type TTickerForm = {
  id?: number;
  event_id: number;
  title: string;
  type: string;
  description: string;
  is_public: boolean;
  is_active: boolean;
  questions: TTickerQuestion[];
  sections: Record<string, TQuestionSection>;
};

export type TTickerFormWithEvent = TTickerForm & {
  event: TTickerEvent;
};

export type TFormResponseData = {
  id: number;
  form_id: number;
  user: TUser;
  response: unknown;
  created_at: string;
};
