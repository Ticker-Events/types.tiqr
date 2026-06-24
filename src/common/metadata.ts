/**
 * Social profile links attached to a user or organiser profile.
 * Additional platforms may be included via the index signature.
 */
export type TSocialMedia = {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  github?: string;
  [key: string]: string | undefined;
};

/**
 * Open-ended metadata object used on orders, products, and store records.
 */
export type TMetaData = Record<string, unknown>;
