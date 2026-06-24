import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import type { TTileSelectOption } from "../domain/forms.js";

export type TFlowbiteBoolean = boolean | string;

export type TFlowbiteSelectTileTheme = {
  base: string;
  addon: string;
  field: {
    base: string;
    icon: {
      base: string;
      svg: string;
    };
    select: {
      base: string;
      withIcon: TFlowbiteBoolean;
      withAddon: TFlowbiteBoolean;
      withShadow: TFlowbiteBoolean;
      sizes: TSelectTileSizes;
      colors: TSelectTileColors;
    };
  };
};

export type TSelectTileColors = {
  gray?: string;
  info?: string;
  failure?: string;
  warning?: string;
  success?: string;
  [key: string]: string | undefined;
};

export type TSelectTileSizes = {
  sm?: string;
  md?: string;
  lg?: string;
  [key: string]: string | undefined;
};

export type TSelectTileProps = PropsWithChildren &
  Omit<ComponentProps<"select">, "onChange" | "color" | "ref"> & {
    addon?: ReactNode;
    color?: keyof TSelectTileColors;
    helperText?: ReactNode;
    icon?: FC<ComponentProps<"svg">>;
    shadow?: boolean;
    sizing?: keyof TSelectTileSizes;
    theme?: Partial<TFlowbiteSelectTileTheme>;
    options?: TTileSelectOption[];
    value?: unknown;
    onChange: (value: unknown) => void;
    className?: string;
    renderas?: "AddressCard";
    handleSelect?: () => void;
    addAction?: ReactNode;
    centerTitle?: boolean;
  };

/** @deprecated Use TFlowbiteSelectTileTheme */
export type FlowbiteSelectTileTheme = TFlowbiteSelectTileTheme;

/** @deprecated Use TSelectTileColors */
export type SelectTileColors = TSelectTileColors;

/** @deprecated Use TSelectTileSizes */
export type SelectTileSizes = TSelectTileSizes;

/** @deprecated Use TSelectTileProps */
export type SelectTileProps = TSelectTileProps;
