import type { UniqueFn } from './index';

/**
 * Uses a Set; O(n) time, O(n) extra space, order preserved by first occurrence.
 */
export const uniqueWithSet: UniqueFn<unknown> = (items) => {
  const seen = new Set<unknown>();
  const out: unknown[] = [];
  for (const x of items) {
    if (!seen.has(x)) {
      seen.add(x);
      out.push(x);
    }
  }
  return out;
};
