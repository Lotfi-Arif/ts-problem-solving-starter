import { bench, describe } from 'vitest';
import { chunk_loop, chunk_map, chunk_reduce } from '@/problems/chunk/impl_baseline';
import { chunk_gen } from '@/problems/chunk/impl_alt';
// import { randomArrays } from '@/problems/utils/gen';

describe('chunk benches', () => {
  const xs = Array.from({ length: 1_000_000 }, (_, i) => i);
  // const xs = randomArrays(50, 2000, 1_000_000_000).flat();
  bench('baseline loop', () => {
    chunk_loop(xs, 3);
  });
  bench('baseline map', () => {
    chunk_map(xs, 3);
  });
  bench('baseline reduce', () => {
    chunk_reduce(xs, 3);
  });
  bench('lazy yield chunk', () => {
    chunk_gen(xs, 3);
  });
});
