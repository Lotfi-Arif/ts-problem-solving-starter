export const groupBy_map = <T, K extends PropertyKey>(xs: ReadonlyArray<T>, key: (t: T) => K) => {
  // TODO
  return new Map<K, T[]>();
};
