import type { TDailyAvailability } from "../domain/appointment.js";
import type { TAddon, TProductOption } from "../domain/product.js";
import type { TOrder } from "../domain/order.js";

export type TSetupScheduleFormContext = {
  availabilityName: string;
  dailyAvailabilities: TDailyAvailability[];
};

export type TSetupScheduleDrawerHeaderProps = {
  onClose: () => void;
};

export type TTimeSlotPickerProps = {
  dayOfWeek: string;
  timeIntervals: { start_time: string; end_time: string }[];
  onChange: (intervals: { start_time: string; end_time: string }[]) => void;
};

export type TProductAddonsSectionProps = {
  addons: TAddon[];
  selectedAddons: number[];
  onChange: (addonIds: number[]) => void;
};

export type TCreateAppointmentHeaderProps = {
  order?: TOrder;
  handleOnClose: () => void;
};

export type TScheduleOverrideFormProps = {
  override?: {
    id: number;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    reason: string;
    is_available: boolean;
    is_active: boolean;
  };
  onClose: () => void;
};

export type TAppointmentSchedulerProps = {
  productOptions: TProductOption[];
  storeId: number;
  onSlotSelect: (slot: { start_time: string; end_time: string }) => void;
};

export type TTimeSlotSelectorTimeSlot = {
  start_time: string;
  end_time: string;
};

export type TTimeSlotSelectorProps = {
  slots: TTimeSlotSelectorTimeSlot[];
  selectedSlot?: TTimeSlotSelectorTimeSlot;
  onSelect: (slot: TTimeSlotSelectorTimeSlot) => void;
};
