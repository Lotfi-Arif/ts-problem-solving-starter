import type { StablePartition } from './index';
export const stablePartition_2pass: StablePartition<unknown> = (xs, pred) => {
  // TODO: use filter twice; keep and drop arrays
  return [[], []];
};
