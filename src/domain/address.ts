/**
 * Postal/shipping address saved on a user account or attached to an order.
 */
export type TAddress = {
  id: number;
  /** Recipient or label for this address. */
  name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  country: string;
  state: string;
  pincode: string;
  landmark: string;
  phone: string;
  /** Delivery or access instructions. */
  instructions: string;
};
