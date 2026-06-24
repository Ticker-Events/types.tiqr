/**
 * Image asset returned by the TiQr media API.
 */
export type TImageMedia = {
  /** Media record identifier. */
  id: number;
  /** Public URL of the image. */
  image: string;
  /** Optional accessibility text. */
  alt_text?: string;
};

/**
 * File-backed media asset. The `image` field holds a preview or thumbnail URL.
 */
export type TFileMedia = {
  /** Media record identifier. */
  id: number;
  /** Preview or thumbnail URL. */
  image: string;
  /** Optional storage path on the server. */
  path?: string;
};

/**
 * Media item that includes both an image preview and a linked PDF document.
 */
export type TImgAndPdf = {
  /** Media record identifier. */
  id: number;
  /** Preview image URL. */
  image: string;
  /** PDF document URL. */
  pdf: string;
};

/** @deprecated Use {@link TImgAndPdf} */
export type TImgAndPdfv = TImgAndPdf;

/**
 * PDF file asset returned by the media API.
 */
export type TPdfFile = {
  /** Media record identifier. */
  id: number;
  /** PDF document URL. */
  pdf: string;
};
