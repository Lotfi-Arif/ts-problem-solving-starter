import type { Chunk } from './index';

export const chunk_loop: Chunk<unknown> = (xs, size) => {
  // TODO: validate size >= 1; loop + slice into new arrays
  return [];
};
