import type { IconType } from "react-icons";

export type TTileSelectOption = {
  id: string;
  label: string;
  description?: string;
  value: unknown;
  Icon?: IconType;
};
