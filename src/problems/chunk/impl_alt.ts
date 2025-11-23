import type { Chunk } from './index';

export function* chunk_gen<T>(xs: ReadonlyArray<T>, size: number): Generator<T[]> {
  // TODO: yield chunks lazily; convert to array in tests when needed
}
