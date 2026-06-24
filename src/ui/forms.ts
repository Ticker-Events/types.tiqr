import type { ReactNode } from "react";

export type TMapLocation = {
  address: string;
  lat: number;
  lng: number;
};

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

export type TFormInput = {
  onChange: (value: {
    formatted_address: string;
    address: google.maps.GeocoderResult;
    lat: number;
    lng: number;
  }) => void;
  value?: TMapLocation;
};

export type TGeocodeResult = {
  address: google.maps.GeocoderResult;
  location: google.maps.LatLng;
};

export type TToggleSwitchProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export type TLabelWithHintProps = {
  label: string;
  hint?: string;
  required?: boolean;
  htmlFor?: string;
};

export type TFormResponseItemProps = {
  question: string;
  answer: ReactNode;
};

export type TAddressSectionProps = {
  onAddressSelect: (address: unknown) => void;
};

export type TAddAddressEmptyStateProps = {
  onAdd: () => void;
};
