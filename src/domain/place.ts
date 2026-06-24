export type TAddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

export type TLocation = {
  lat: number;
  lng: number;
};

export type TViewport = {
  south: number;
  west: number;
  north: number;
  east: number;
};

export type TGeometry = {
  location?: TLocation;
  viewport?: TViewport;
};

export type TPlusCode = {
  compound_code: string;
  global_code: string;
};

export type TPlace = {
  formatted_address: string;
  geometry: TGeometry;
  name: string;
  place_id: string;
  plus_code: TPlusCode;
  address_components: TAddressComponent[];
};
