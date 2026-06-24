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

export type TSortOptionsKey = keyof typeof ORDER_SORT_OPTIONS;
