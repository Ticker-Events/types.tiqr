export type TCurrency = {
  id: string;
  value: string;
  label: string;
  symbol: string;
};

export type TCountry = {
  id: string;
  value: string;
  label: string;
  locale: string;
  currency: TCurrency[];
  phoneInputCountryCode: string;
  timezone: string;
};
