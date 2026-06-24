/**
 * Google Places address component (street, city, country, etc.).
 */
export type TAddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

/** Geographic coordinates. */
export type TLocation = {
  lat: number;
  lng: number;
};

/** Bounding box describing a map viewport. */
export type TViewport = {
  south: number;
  west: number;
  north: number;
  east: number;
};

/** Geometry attached to a {@link TPlace}. */
export type TGeometry = {
  location?: TLocation;
  viewport?: TViewport;
};

/** Open Location Code (plus code) for a place. */
export type TPlusCode = {
  compound_code: string;
  global_code: string;
};

/**
 * Place object shaped like a Google Maps Places API result.
 * Used for event venue addresses.
 */
export type TPlace = {
  formatted_address: string;
  geometry: TGeometry;
  name: string;
  place_id: string;
  plus_code: TPlusCode;
  address_components: TAddressComponent[];
};
