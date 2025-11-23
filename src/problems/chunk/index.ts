export type Chunk<T> = (xs: ReadonlyArray<T>, size: number) => T[][];
export const spec = `Split array into consecutive chunks of given size. Keep tail if not full.`;
