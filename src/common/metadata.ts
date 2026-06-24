export type TSocialMedia = {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  github?: string;
  [key: string]: string | undefined;
};

export type TMetaData = Record<string, unknown>;
