import { bench, describe } from 'vitest';
// import { chunk_loop } from '@/problems/chunk/impl_baseline';

describe('chunk benches', () => {
  // const xs = Array.from({ length: 100_000 }, (_, i) => i);
  bench('baseline', () => {
    /* chunk_loop(xs, 3); */
  });
});
