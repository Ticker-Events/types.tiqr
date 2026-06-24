/**
 * Contract that every analytics adapter (Facebook Pixel, GTM, Clarity) must implement.
 */
export type TTrackingAdapter = {
  init(config: unknown): void;
  track(eventName: string, eventData?: Record<string, unknown>): void;
  isInitialized(): boolean;
  getName(): string;
};

/**
 * Configuration object passed to the tracking manager on app initialisation.
 */
export type TTrackingConfig = {
  facebookPixel?: {
    pixelId: string | false;
    options?: unknown;
  };
  microsoftClarity?: {
    projectId: string | false;
  };
  googleTagManager?: {
    gtmId: string | false;
    dataLayer?: Record<string, unknown>;
    dataLayerName?: string;
    auth?: string;
    preview?: string;
  };
};

/** Arbitrary key-value payload attached to a tracked event. */
export type TTrackingEventData = Record<string, unknown>;

/** Options for the `useTracking` hook. */
export type TUseTrackingOptions = {
  /** When true, initialises all configured adapters on mount. */
  autoInit?: boolean;
};

/** Facebook Pixel adapter configuration. */
export type TFacebookPixelConfig = {
  pixelId: string;
  options?: unknown;
};

/** Google Tag Manager adapter configuration. */
export type TGoogleTagManagerConfig = {
  gtmId: string;
  dataLayer?: Record<string, unknown>;
  dataLayerName?: string;
  auth?: string;
  preview?: string;
};

/** Microsoft Clarity adapter configuration. */
export type TMicrosoftClarityConfig = {
  projectId: string;
};

/** @deprecated Use {@link TTrackingAdapter} */
export type TrackingAdapter = TTrackingAdapter;

/** @deprecated Use {@link TTrackingConfig} */
export type TrackingConfig = TTrackingConfig;

/** @deprecated Use {@link TTrackingEventData} */
export type TrackingEventData = TTrackingEventData;

/** @deprecated Use {@link TUseTrackingOptions} */
export type UseTrackingOptions = TUseTrackingOptions;

/** @deprecated Use {@link TFacebookPixelConfig} */
export type FacebookPixelConfig = TFacebookPixelConfig;

/** @deprecated Use {@link TGoogleTagManagerConfig} */
export type GoogleTagManagerConfig = TGoogleTagManagerConfig;

/** @deprecated Use {@link TMicrosoftClarityConfig} */
export type MicrosoftClarityConfig = TMicrosoftClarityConfig;
