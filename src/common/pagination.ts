export type TListResponse<T> = {
  count: number;
  next?: number;
  previous?: number;
  results: T[];
};

/** @deprecated Use TListResponse */
export type TPaginatedResponse<T> = TListResponse<T>;
