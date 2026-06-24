# @types/tiqr

Shared TypeScript type definitions for the **TiQr Store** and **TiQr Events** frontends.

All types are prefixed with `T` (e.g. `TUser`, `TTickerEvent`). JSDoc comments on every export surface in IDE tooltips and in the generated `.d.ts` files under `dist/`.

## Install

### From npm

```bash
npm install @types/tiqr
```

### From GitHub

Install a branch, tag, or commit directly from the repository. `dist/` is built automatically via the `prepare` script after install.

```bash
# Latest main branch
npm install github:tiqr-labs/types.tiqr

# Specific branch
npm install github:tiqr-labs/types.tiqr#develop

# Specific tag or release
npm install github:tiqr-labs/types.tiqr#v1.0.0

# Specific commit
npm install github:tiqr-labs/types.tiqr#<commit-sha>
```

Equivalent `package.json` dependency entries:

```json
{
  "dependencies": {
    "@types/tiqr": "github:tiqr-labs/types.tiqr",
    "@types/tiqr": "github:tiqr-labs/types.tiqr#main",
    "@types/tiqr": "github:tiqr-labs/types.tiqr#v1.0.0"
  }
}
```

Using yarn or pnpm:

```bash
yarn add github:tiqr-labs/types.tiqr
pnpm add github:tiqr-labs/types.tiqr
```

HTTPS git URL (alternative syntax):

```bash
npm install git+https://github.com/tiqr-labs/types.tiqr.git
```

For private repos, use a [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) in the URL or configure git credentials locally before installing.

### Local development (monorepo)

When working on `types.tiqr` alongside a consumer app (e.g. `ticker_events_fe`), link the local package:

```bash
# From the consumer app directory
npm install ../types.tiqr
```

Or add a `file:` dependency in `package.json`:

```json
{
  "dependencies": {
    "@types/tiqr": "file:../types.tiqr"
  }
}
```

Run `npm run build` inside `types.tiqr` after type changes so `dist/` stays up to date.

## Usage

```typescript
// Everything
import type { TUser, TStore, TTickerEvent, TOrder } from "@types/tiqr";

// Domain models only (no UI peer deps required)
import type { TUser, TOrder, TTickerEvent } from "@types/tiqr/domain";

// Component prop types
import type { TToastProps, TNavbarProps } from "@types/tiqr/ui";

// Page/server-side data shapes
import type { THomeData } from "@types/tiqr/pages/events";
import type { TStoreHomeData } from "@types/tiqr";

// Analytics adapters
import type { TTrackingAdapter, TTrackingConfig } from "@types/tiqr/tracking";
```

## Subpath exports

| Path | Contents |
|------|----------|
| `@types/tiqr` | All types |
| `@types/tiqr/domain` | API/domain models |
| `@types/tiqr/ui` | Component and hook prop types |
| `@types/tiqr/pages/events` | Events app page data types |
| `@types/tiqr/tracking` | Analytics adapter types |

## Peer dependencies

| Package | Required | Used by |
|---------|----------|---------|
| `react` | Yes (for UI types) | `ReactNode`, refs, component props |
| `firebase` | Optional | `TAuth` in `auth/context` |
| `react-icons` | Dev only | `IconType` on genre/tile types |
| `@types/google.maps` | Dev only | Map input form types |

---

## Type reference

### Common (`src/common/`)

| Type | Description |
|------|-------------|
| `THashMap` | Generic `Record<string, unknown>` for metadata and customisation |
| `TCurrency` | Currency option in locale selectors |
| `TCountry` | Country config with currencies, locale, and timezone |
| `TImageMedia` | Image asset from the media API |
| `TFileMedia` | File asset with preview URL and optional storage path |
| `TImgAndPdf` | Media item with both image preview and PDF |
| `TPdfFile` | PDF file asset |
| `TSocialMedia` | Social profile links on user/organiser profiles |
| `TMetaData` | Open-ended metadata `Record<string, unknown>` |
| `TListResponse<T>` | Standard paginated API list wrapper |
| `TPaginatedResponse<T>` | **Deprecated** — alias for `TListResponse` |

### Constants (`src/constants/`)

| Export | Description |
|--------|-------------|
| `ORDER_SORT_OPTIONS` | Sort presets for the order admin list |
| `TSortOptionsKey` | Key of `ORDER_SORT_OPTIONS` |

### Auth (`src/auth/`)

| Type | Description |
|------|-------------|
| `TAuth` | Firebase auth context value (`user`, `signOut`) |

### Domain — shared user (`src/domain/user.ts`)

| Type | Description |
|------|-------------|
| `TKycStatus` | KYC verification status union |
| `TWAProject` | Linked WhatsApp Business project |
| `TUser` | Platform user (Store + Events) |
| `TMembershipClass` | Membership tier for club organisers |
| `TConnectionRequest` | Attendee networking connection request |

### Domain — store (`src/domain/`)

| Type | Description |
|------|-------------|
| `TAddress` | Postal/shipping address |
| `TStore` | TiQr store entity |
| `TStoreMetaData` | Store onboarding form and website |
| `TStoreConfiguration` | Feature flags and menu visibility |
| `TFormSection` / `TFormQuestion` | Store metadata form structure |
| `TProduct` / `TProductDetails` | Catalog product or service |
| `TProductOption` | Purchasable product variant |
| `TProductPayload` | Product create/update API payload |
| `TProductOptionSnapshot` | Frozen option on a completed order |
| `TAddon` / `TBookedAddon` | Optional add-on and booked instance |
| `TCategory` | Product category |
| `TProductType` | `"product"` \| `"service"` |
| `TCart` / `TCartItem` | Shopping cart |
| `TOrder` / `TOrderDetails` | Store order |
| `TOrderItem` | Order line item |
| `TOrderLog` | Status change audit entry |
| `TBuyerMetaData` | Buyer info captured at checkout |
| `TShopMetaData` | Fulfillment tracking added by store |
| `TOrderStatusDetails` | UI config for an order status |
| `TOrderDaysFilterOptions` | Preset date-range filter |
| `TOrderSummaryFilter` | Custom date-range filter |
| `TPayment` / `TPaymentMetaData` | Payment record |
| `TDayOfWeek` | Weekday abbreviation |
| `TTimeSlot` | Start/end time interval |
| `TDailyAvailability` | Per-day availability config |
| `TSchedule` | Weekly schedule template |
| `TScheduleOverride` | One-off date override |
| `TTimeSlotResponse` | Bookable slot from the API |
| `TFAQ` | Store FAQ entry |
| `TChatFile` / `TChatUser` / `TMessage` | WhatsApp messaging types |
| `TTileSelectOption` | Tile select input option |

### Domain — events (`src/domain/`)

| Type | Description |
|------|-------------|
| `TTickerAIEventData` | Core event fields (AI or manual) |
| `TTickerEvent` | Full event API entity |
| `TEventCollaboratorsMap` | Collaborators grouped by role |
| `TPlatformFee` | Fee percentages and fixed charges |
| `TGenreSummary` | Event count per genre |
| `TTag` | Creatable tag select option |
| `TDateDisplay` | Formatted date strings for cards |
| `TFilter` / `TFilterOption` / `TAppliedFilters` | Event list filters |
| `TTicketAddon` | Ticket add-on |
| `TBasicTicket` | Shared ticket fields |
| `TTicketRequest` | Ticket create/update payload |
| `TTicketResponse` | Ticket API response |
| `TTickerOption` | Form question option |
| `TQuestionSection` | Form section grouping |
| `TQuestionCondition` | Conditional question visibility |
| `TTickerQuestion` | Form question definition |
| `TTickerForm` / `TTickerFormWithEvent` | Event form |
| `TFormResponseData` | Submitted form response |
| `TAddonDiscount` / `TDiscountCoupon` | Discount types |
| `TApplicableTicket` / `TDiscountCouponItem` | Admin coupon types |
| `TAddressComponent` … `TPlace` | Google Maps place types |
| `TSeatSection` / `TSeatConfiguration` | Seat map config |
| `TSeatConfigurationResponse` | Live seat availability |
| `TSectionConfiguration` | SVG section seating |
| `TCollaboration` / `TCollaborationItem` | Event collaboration |
| `TSpeakerResponse` / `TSpeakerRequest` | Event speaker |
| `TAttendeeProfile` / `TAttendeeProfileWrite` | Networking profile |
| `TBookingType` | `"offline"` \| `"online"` \| `"complimentary"` |
| `TBookingData` / `TUserBooking` | Booking records |
| `TBookingAddon` / `TAddonBookingSnapshot` | Booking add-on lines |
| `TPaymentBreakdown` / `TBookingPaymentSnapshot` | Booking payment |
| `TBreakup` / `TBreakupItem` | Price breakup display |
| `TBookingSummary` / `TBookingStats` | Booking aggregates |
| `TPaymentSummary` / `TPaymentStats` / `TPaymentSummaryDayWise` | Revenue aggregates |
| `TWBasicRequest` … `TWBrochureRequest` | Event wizard step payloads |
| `TShortUrl` / `TShortUrlVisit` | URL shortener |
| `TShortUrlVisitPerDay` / `TShortUrlVisitPerCountry` | Short URL analytics |
| `TFirebaseCheckinData` / `TFirebaseScanLog` | Firebase check-in |
| `TCheckinData` / `TCheckinRow` | Check-in data structures |
| `TCheckPoint` / `TCheckPointData` / `TCheckPointResponse` | Checkpoints |
| `TCheckInDataProps` | Check-in dashboard props |
| `TQRCodeData` | QR code payload |

### Pages (`src/pages/`)

| Type | Description |
|------|-------------|
| `TStoreHomeData` | Store home page server data |
| `TProductDetailsPageProps` | Product detail page props |
| `TCheckoutPageProps` | Checkout page props |
| `TStoreHomePageProps` / `TProductPageProps` | Next.js route params |
| `THomeData` | Events home page server data |
| `TAllOrganisersData` | All organisers listing |
| `TOrganisersHomeData` | Organiser profile page |
| `TEventLandingPageData` | Event landing page |
| `TTicketBookingPageData` | Ticket booking page |
| `TSelectSeatsPageData` / `TSelectSectionPageData` | Seating pages |
| `TFormResponsePageData` | Public form page |
| `TGenreEventsPageData` / `TFilterEventsPageData` | Filtered listings |
| `TTiqraiEventData` | Tiqrai AI output shape |
| `TGenreItem` | Genre discovery tile |

### Tracking (`src/tracking/`)

| Type | Description |
|------|-------------|
| `TTrackingAdapter` | Analytics adapter interface |
| `TTrackingConfig` | Multi-adapter configuration |
| `TTrackingEventData` | Event payload |
| `TUseTrackingOptions` | `useTracking` hook options |
| `TFacebookPixelConfig` | Facebook Pixel config |
| `TGoogleTagManagerConfig` | GTM config |
| `TMicrosoftClarityConfig` | Clarity config |

### Hooks (`src/hooks/`)

| Type | Description |
|------|-------------|
| `TDayAvailability` / `TOriginalAvailability` / `TConvertedAvailability` | Availability conversion |
| `TAvailabilityDayMapping` | Weekday index mapping |
| `TUseWeeklyCalendarViewProps` / `Return` | Weekly calendar hook |
| `TUseMonthlyCalendarViewProps` / `Return` | Monthly calendar hook |
| `TUseCalendarDateSelectionProps` / `Return` | Date selection hook |
| `TUseMessagesProps` | Messages hook input |

### Calendar (`src/calendar/`)

| Type | Description |
|------|-------------|
| `TCalendarEvent` | Calendar appointment entry |
| `TCalendarWeeklyViewProps` / `TCalendarMonthlyViewProps` | View props |
| `TCalendarEventItemProps` / `TCalendarDayProps` | Cell/event props |
| `TCalendarEventsListProps` / `TCalendarEventProps` | Time-grid props |
| `TCalendarDateSelectorProps` | Date navigation |
| `TCalendarShimmerProps` / `TWeeklyCalendarShimmerProps` | Loading skeletons |
| `TMobileViewProps` / `TDesktopViewProps` / `TMobileDayCellProps` | Layout props |
| `TPopoverStyles` | Popover positioning |

### UI (`src/ui/`)

| Type | Description |
|------|-------------|
| `TCrumbItem` / `TTableHeader` / `TTableWidgetProps` | Events shared UI |
| `TCollaborationsProps` / `TNavbarProps` | Events layout props |
| `TAdminPanelHeaderProps` / `TShimmerTableProps` | Admin shared UI |
| `TStoreHeaderProps` / `TProductsListProps` / `TCartItemProps` | Storefront UI |
| `TMapLocation` / `TMapInputProps` / `TGeocodeResult` | Map form controls |
| `TToggleSwitchProps` / `TLabelWithHintProps` | Form controls |
| `TSelectTileProps` / `TFlowbiteSelectTileTheme` | Tile select component |
| `TAlertProps` / `TToastProps` | Feedback components |
| `TOrderListViewProps` … `TAlertCenterItemProps` | Order admin UI |
| `TProductTableProps` … `TFaqReorderModalProps` | Product admin UI |
| `TSetupScheduleFormContext` … `TTimeSlotSelectorProps` | Appointment UI |

---

## Deprecated aliases

Legacy names from `ticker_events_fe` are kept as deprecated aliases so existing code compiles during migration:

| Deprecated | Replacement |
|------------|-------------|
| `TPaginatedResponse` | `TListResponse` |
| `TImgAndPdfv` | `TImgAndPdf` |
| `TSeatConfigurtaionResponse` | `TSeatConfigurationResponse` |
| `TSectionConfigurtaion` | `TSectionConfiguration` |
| `ShortUrl` / `ShortUrlVisit` | `TShortUrl` / `TShortUrlVisit` |
| `TrackingAdapter` etc. | `TTrackingAdapter` etc. |
| `CalendarEvent` | `TCalendarEvent` |
| `ScheduleOverride` | `TScheduleOverride` |
| `FlowbiteSelectTileTheme` etc. | `TFlowbiteSelectTileTheme` etc. |

## Building

```bash
npm run build    # emits dist/*.d.ts
npm run typecheck
```

## Conventions

- All types use `type` (not `interface`) and are prefixed with `T`.
- Domain types mirror TiQr API response shapes (snake_case fields).
- UI types describe React component props and hook inputs/outputs.
- Page types describe Next.js server-side data loaders.
