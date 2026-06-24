export type TPaymentMetaData = {
  payment_id: string;
  payment_gateway: string;
  url_to_redirect: string;
};

export type TPayment = {
  id: number;
  status: string;
  payment_gateway: string;
  amount: number;
  platform_fee: number;
  meta_data: TPaymentMetaData;
  callback_url: string;
};
