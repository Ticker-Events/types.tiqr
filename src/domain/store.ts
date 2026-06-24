import type { TImageMedia } from "../common/media.js";
import type { TKycStatus, TUser, TWAProject } from "./user.js";

export type TFormSection = {
  section: string;
  questions: TFormQuestion[];
};

export type TFormQuestion = {
  id: string;
  type: string;
  title: string;
  options: unknown[];
  validations: string[];
  description?: string;
  readOnly?: boolean;
  value?: string;
  hidden?: boolean;
};

export type TStoreMetaData = {
  form: TFormSection[];
  website: string;
};

export type TStoreConfiguration = {
  menu: Record<string, boolean>;
  features: string[];
  alias: Record<string, string>;
};

export type TStore = {
  id: number;
  name: string;
  owner: TUser;
  logo: TImageMedia;
  cover: TImageMedia;
  description: string;
  address: string;
  gst_number: string;
  kyc_status: TKycStatus;
  subscription_end_date: string;
  tiqr_fee: number;
  fee_paid_by_buyer: boolean;
  wa_project?: TWAProject;
  currency: string;
  country: string;
  timezone: string;
  delivery_radius?: number | null;
  metadata: TStoreMetaData;
  store_configuration: TStoreConfiguration;
};
