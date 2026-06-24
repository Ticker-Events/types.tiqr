import type { ReactNode } from "react";

/** Allowed visual variants for alert banners. */
export const AlertType = ["info", "success", "failure", "warning", undefined] as const;

export type TAlertType = (typeof AlertType)[number];

/** Props for the inline alert banner component. */
export type TAlertProps = {
  message: ReactNode;
  type: TAlertType;
};
