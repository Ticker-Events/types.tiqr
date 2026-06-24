/**
 * Currency option used in country/locale selectors.
 */
export type TCurrency = {
  /** ISO or internal currency identifier. */
  id: string;
  /** Value submitted in forms and API requests. */
  value: string;
  /** Human-readable currency label. */
  label: string;
  /** Display symbol, e.g. `₹` or `$`. */
  symbol: string;
};

/**
 * Country configuration including supported currencies and regional defaults.
 */
export type TCountry = {
  /** ISO country code or internal identifier. */
  id: string;
  /** Value submitted in forms and API requests. */
  value: string;
  /** Human-readable country name. */
  label: string;
  /** Default locale string, e.g. `en-IN`. */
  locale: string;
  /** Currencies available for this country. */
  currency: TCurrency[];
  /** Country calling code used by phone inputs. */
  phoneInputCountryCode: string;
  /** IANA timezone identifier. */
  timezone: string;
};
