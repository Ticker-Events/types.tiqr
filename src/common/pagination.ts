/**
 * Standard paginated list wrapper returned by TiQr list API endpoints.
 *
 * @typeParam T - Item type contained in `results`.
 */
export type TListResponse<T> = {
  /** Total number of items across all pages. */
  count: number;
  /** Page number of the next page, if any. */
  next?: number;
  /** Page number of the previous page, if any. */
  previous?: number;
  /** Items for the current page. */
  results: T[];
};

/** @deprecated Use {@link TListResponse} */
export type TPaginatedResponse<T> = TListResponse<T>;
