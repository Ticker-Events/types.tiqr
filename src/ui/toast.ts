import type { ReactNode } from "react";

/** Allowed visual variants for toast notifications. */
export const ToastType = ["info", "success", "failure", "warning", undefined] as const;

export type TToastType = (typeof ToastType)[number];

/** Props for the toast notification component. */
export type TToastProps = {
  message: ReactNode;
  type: TToastType;
  clearToast: () => void;
  className?: string;
};
