import type { ReactNode } from "react";

/** Normalised address with coordinates from a map picker. */
export type TMapLocation = {
  address: string;
  lat: number;
  lng: number;
};

/** Props for the Google Maps address input component. */
export type TMapInputProps = {
  name: string;
  validate?: (value: TMapLocation) => string | undefined;
  label?: string;
  hint?: string;
  containerStyle?: {
    height: string;
    width: string;
  };
  className?: string;
  initialValue?: TMapLocation | string;
};

/** Controlled input interface for map-based address fields. */
export type TFormInput = {
  onChange: (value: {
    formatted_address: string;
    address: google.maps.GeocoderResult;
    lat: number;
    lng: number;
  }) => void;
  value?: TMapLocation;
};

/** Result returned by the geocoding helper. */
export type TGeocodeResult = {
  address: google.maps.GeocoderResult;
  location: google.maps.LatLng;
};

/** Props for the toggle switch form control. */
export type TToggleSwitchProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

/** Props for a form label with an optional hint tooltip. */
export type TLabelWithHintProps = {
  label: string;
  hint?: string;
  required?: boolean;
  htmlFor?: string;
};

/** Props for displaying a single form question and answer pair. */
export type TFormResponseItemProps = {
  question: string;
  answer: ReactNode;
};

/** Props for the address selection section in checkout forms. */
export type TAddressSectionProps = {
  onAddressSelect: (address: unknown) => void;
};

/** Props for the empty state shown when no saved addresses exist. */
export type TAddAddressEmptyStateProps = {
  onAdd: () => void;
};
