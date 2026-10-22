/**
 * Discount applied to a specific ticket add-on within a coupon.
 */
export type TAddonDiscount = {
  id: number;
  addon_id: number;
  code: string;
  type: string;
  amount_after_discount: number;
};

/**
 * Discount coupon available at checkout for a ticket.
 * `id` is returned by participant coupon validation and `available_discounts`.
 */
export type TDiscountCoupon = {
  id?: number;
  code: string;
  type: string;
  minimum_usage: number;
  amount_after_discount: number;
  addon_discounts?: TAddonDiscount[];
};

/** Ticket type a discount coupon can be applied to. */
export type TApplicableTicket = {
  id: number;
  type: string;
};

/**
 * Discount coupon as listed in the organiser admin panel.
 */
export type TDiscountCouponItem = {
  id: number;
  code: string;
  type: string;
  amount_after_discount: number;
  applicable_tickets: TApplicableTicket[];
  status: string;
};
