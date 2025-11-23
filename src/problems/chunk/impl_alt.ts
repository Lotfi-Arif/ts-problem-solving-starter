export function* chunk_gen<T>(xs: ReadonlyArray<T>, size: number): Generator<T[]> {
  // TODO: yield chunks lazily; convert to array in tests when needed

  if (size <= 0) {
    throw new RangeError(`chunk size must be > 0 (got ${size})`);
  }

  for (let i = 0; i < xs.length; i += size) {
    yield xs.slice(i, i + size);
  }
}
