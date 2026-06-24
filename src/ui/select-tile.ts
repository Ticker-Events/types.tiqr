import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import type { TTileSelectOption } from "../domain/forms.js";

/** Flowbite theme boolean that accepts `true`, `false`, or a CSS class string. */
export type TFlowbiteBoolean = boolean | string;

/** Full Flowbite theme object for the select-tile component. */
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

/** Colour variant class names for the select-tile component. */
export type TSelectTileColors = {
  gray?: string;
  info?: string;
  failure?: string;
  warning?: string;
  success?: string;
  [key: string]: string | undefined;
};

/** Size variant class names for the select-tile component. */
export type TSelectTileSizes = {
  sm?: string;
  md?: string;
  lg?: string;
  [key: string]: string | undefined;
};

/** Props for the tile-style select input component. */
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

/** @deprecated Use {@link TFlowbiteSelectTileTheme} */
export type FlowbiteSelectTileTheme = TFlowbiteSelectTileTheme;

/** @deprecated Use {@link TSelectTileColors} */
export type SelectTileColors = TSelectTileColors;

/** @deprecated Use {@link TSelectTileSizes} */
export type SelectTileSizes = TSelectTileSizes;

/** @deprecated Use {@link TSelectTileProps} */
export type SelectTileProps = TSelectTileProps;
