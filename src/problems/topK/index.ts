export type TopK = (xs: ReadonlyArray<number>, k: number) => number[];
export const spec = 'Compare sort-by-count vs heap vs bucket sort.';
