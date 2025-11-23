import type { Chunk } from './index';

export const chunk_loop: Chunk<unknown> = (xs, size) => {
  // TODO: validate size >= 1; loop + slice into new arrays
  const chunkedArray = [];

  for (let i = 0; i < xs.length; i += size) {
    chunkedArray.push(xs.slice(i, i + size));
  }

  return chunkedArray;
};

// Time complexity of this?
export const chunk_map: Chunk<unknown> = (xs, size) => {
  const chunkedArray = xs
    .map((_, i) => (i % size === 0 ? xs.slice(i, i + size) : null))
    .filter((c): c is [] => c !== null);
  return chunkedArray;
};

export const chunk_reduce: Chunk<unknown> = (xs, size) => {
  return xs.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(xs.slice(i, i + size));
    return acc;
  }, []);
};
