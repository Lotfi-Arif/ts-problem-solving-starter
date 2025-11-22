import type { UniqueFn } from './index';

/**
 * Map counting; O(n) time, O(n) extra space. Also gives frequency if needed.
 */
export const uniqueWithMap: UniqueFn<unknown> = (items) => {
  const counts = new Map<unknown, number>();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return Array.from(counts.keys());
};
