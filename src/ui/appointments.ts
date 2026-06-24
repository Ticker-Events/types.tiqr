import type { TDailyAvailability } from "../domain/appointment.js";
import type { TAddon, TProductOption } from "../domain/product.js";
import type { TOrder } from "../domain/order.js";

/** Form state shared across schedule setup drawer steps. */
export type TSetupScheduleFormContext = {
  availabilityName: string;
  dailyAvailabilities: TDailyAvailability[];
};

/** Props for the schedule setup drawer header. */
export type TSetupScheduleDrawerHeaderProps = {
  onClose: () => void;
};

/** Props for the per-day time slot picker in schedule setup. */
export type TTimeSlotPickerProps = {
  dayOfWeek: string;
  timeIntervals: { start_time: string; end_time: string }[];
  onChange: (intervals: { start_time: string; end_time: string }[]) => void;
};

/** Props for the add-on multi-select section in the product form. */
export type TProductAddonsSectionProps = {
  addons: TAddon[];
  selectedAddons: number[];
  onChange: (addonIds: number[]) => void;
};

/** Props for the appointment creation drawer header. */
export type TCreateAppointmentHeaderProps = {
  order?: TOrder;
  handleOnClose: () => void;
};

/** Props for the schedule override create/edit form. */
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

/** Props for the appointment time-slot scheduler widget. */
export type TAppointmentSchedulerProps = {
  productOptions: TProductOption[];
  storeId: number;
  onSlotSelect: (slot: { start_time: string; end_time: string }) => void;
};

/** A single selectable time slot. */
export type TTimeSlotSelectorTimeSlot = {
  start_time: string;
  end_time: string;
};

/** Props for the time slot selector list. */
export type TTimeSlotSelectorProps = {
  slots: TTimeSlotSelectorTimeSlot[];
  selectedSlot?: TTimeSlotSelectorTimeSlot;
  onSelect: (slot: TTimeSlotSelectorTimeSlot) => void;
};
