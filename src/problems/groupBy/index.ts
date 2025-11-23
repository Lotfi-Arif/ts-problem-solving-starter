export type GroupBy<T, K extends PropertyKey> = (
  xs: ReadonlyArray<T>,
  key: (t: T) => K,
) => Map<K, T[]>;
export const spec = 'Stable grouping by key; Map vs object; memory trade-offs.';
