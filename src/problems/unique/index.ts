export type UniqueFn<T> = (items: ReadonlyArray<T>) => T[];

export const assertSorted = <T>(arr: readonly T[], cmp: (a: T, b: T) => number): void => {
  for (let i = 1; i < arr.length; i++) {
    if (cmp(arr[i - 1]!, arr[i]!) > 0) throw new Error('array must be sorted');
  }
};
