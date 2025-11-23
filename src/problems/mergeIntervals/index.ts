export type Interval = [number, number];
export type MergeIntervals = (xs: ReadonlyArray<Interval>) => Interval[];
export const spec = 'Sort by start; merge overlapping/adjacent intervals.';
