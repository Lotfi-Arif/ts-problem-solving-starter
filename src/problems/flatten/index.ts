export type Flatten1<T> = (xs: ReadonlyArray<ReadonlyArray<T> | T>) => T[];
export type FlattenDeep<T> = (xs: unknown) => T[]; // deep version
export const spec = 'Flatten 1-level and deeply; consider stack safety.';
