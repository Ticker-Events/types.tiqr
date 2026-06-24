export type TTrackingAdapter = {
  init(config: unknown): void;
  track(eventName: string, eventData?: Record<string, unknown>): void;
  isInitialized(): boolean;
  getName(): string;
};

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

export type TTrackingEventData = Record<string, unknown>;

export type TUseTrackingOptions = {
  autoInit?: boolean;
};

export type TFacebookPixelConfig = {
  pixelId: string;
  options?: unknown;
};

export type TGoogleTagManagerConfig = {
  gtmId: string;
  dataLayer?: Record<string, unknown>;
  dataLayerName?: string;
  auth?: string;
  preview?: string;
};

export type TMicrosoftClarityConfig = {
  projectId: string;
};

/** @deprecated Use TTrackingAdapter */
export type TrackingAdapter = TTrackingAdapter;

/** @deprecated Use TTrackingConfig */
export type TrackingConfig = TTrackingConfig;

/** @deprecated Use TTrackingEventData */
export type TrackingEventData = TTrackingEventData;

/** @deprecated Use TUseTrackingOptions */
export type UseTrackingOptions = TUseTrackingOptions;

/** @deprecated Use TFacebookPixelConfig */
export type FacebookPixelConfig = TFacebookPixelConfig;

/** @deprecated Use TGoogleTagManagerConfig */
export type GoogleTagManagerConfig = TGoogleTagManagerConfig;

/** @deprecated Use TMicrosoftClarityConfig */
export type MicrosoftClarityConfig = TMicrosoftClarityConfig;
