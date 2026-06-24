import type { TTickerEvent } from "./event.js";
import type { TUser } from "./user.js";

/** Selectable option for a multiple-choice form question. */
export type TTickerOption = {
  id: string;
  value: string;
};

/**
 * Logical section grouping questions within an event form.
 */
export type TQuestionSection = {
  id: string;
  title: string;
  /** When true, this section is shown only after initial form submission. */
  take_after_submission: boolean;
};

/**
 * Conditional visibility rule evaluated against form answers.
 */
export type TQuestionCondition = {
  check: string;
  key: string;
  value: unknown;
};

/**
 * Single question in an event registration or feedback form.
 */
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

/**
 * Event form definition (registration, feedback, etc.).
 */
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

/** Form with its parent event expanded. */
export type TTickerFormWithEvent = TTickerForm & {
  event: TTickerEvent;
};

/**
 * Stored answer set submitted against an event form.
 */
export type TFormResponseData = {
  id: number;
  form_id: number;
  user: TUser;
  response: unknown;
  created_at: string;
};
