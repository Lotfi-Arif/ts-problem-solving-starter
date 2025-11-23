export type StablePartition<T> = (xs: ReadonlyArray<T>, pred: (x: T) => boolean) => [T[], T[]];
export const spec = 'Split into [kept, dropped] preserving order.';
