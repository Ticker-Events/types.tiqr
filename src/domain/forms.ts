import type { IconType } from "react-icons";

/**
 * Option rendered inside a tile-style select input.
 */
export type TTileSelectOption = {
  /** Optional stable identifier for the option. */
  id?: string;
  label: string;
  description?: string;
  value: unknown;
  Icon?: IconType;
};
