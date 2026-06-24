import type { ReactNode } from "react";

export const ToastType = ["info", "success", "failure", "warning", undefined] as const;

export type TToastType = (typeof ToastType)[number];

export type TToastProps = {
  message: ReactNode;
  type: TToastType;
  clearToast: () => void;
  className?: string;
};
