import type { UniqueFn } from './index';

/**
 * Sort + scan; O(n log n) time, O(1) extra (if in‑place) but loses original order.
 */
export const uniqueBySortScan: UniqueFn<unknown> = (items) => {
  if (items.length <= 1) return [...items];
  const sorted = [...items].sort(); // relies on default comparator for primitives
  const out: unknown[] = [sorted[0]!];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i - 1]) out.push(sorted[i]!);
  }
  return out;
};
