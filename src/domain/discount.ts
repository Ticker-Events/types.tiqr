export type TAddonDiscount = {
  id: number;
  addon_id: number;
  code: string;
  type: string;
  amount_after_discount: number;
};

export type TDiscountCoupon = {
  code: string;
  type: string;
  minimum_usage: number;
  amount_after_discount: number;
  addon_discounts?: TAddonDiscount[];
};

export type TApplicableTicket = {
  id: number;
  type: string;
};

export type TDiscountCouponItem = {
  id: number;
  code: string;
  type: string;
  amount_after_discount: number;
  applicable_tickets: TApplicableTicket[];
  status: string;
};
