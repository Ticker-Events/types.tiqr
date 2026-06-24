export type TImageMedia = {
  id: number;
  image: string;
  alt_text?: string;
};

export type TFileMedia = {
  id: number;
  image: string;
  path?: string;
};

export type TImgAndPdf = {
  id: number;
  image: string;
  pdf: string;
};

/** @deprecated Use TImgAndPdf */
export type TImgAndPdfv = TImgAndPdf;

export type TPdfFile = {
  id: number;
  pdf: string;
};
