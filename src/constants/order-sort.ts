/**
 * Sort options for order list views in the store admin panel.
 */
export const ORDER_SORT_OPTIONS = {
  oldest_first: {
    id: "oldest_first",
    name: "Oldest First",
    sortParam: "created_at",
  },
  newest_first: {
    id: "newest_first",
    name: "Newest First",
    sortParam: "-created_at",
  },
} as const;

/** Key identifying an entry in {@link ORDER_SORT_OPTIONS}. */
export type TSortOptionsKey = keyof typeof ORDER_SORT_OPTIONS;
