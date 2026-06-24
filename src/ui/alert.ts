import type { ReactNode } from "react";

export const AlertType = ["info", "success", "failure", "warning", undefined] as const;

export type TAlertType = (typeof AlertType)[number];

export type TAlertProps = {
  message: ReactNode;
  type: TAlertType;
};
