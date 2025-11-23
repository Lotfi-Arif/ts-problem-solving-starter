export type Prefix = (xs: ReadonlyArray<number>) => number[];
export type RangeQuery = (l: number, r: number) => number; // inclusive
export const spec = 'Precompute prefix; O(1) range sums; off-by-one care.';
