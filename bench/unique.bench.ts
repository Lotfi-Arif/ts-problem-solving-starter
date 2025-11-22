import { bench, describe } from 'vitest';
import { randomInts } from '@/problems/utils/gen';
import { uniqueWithSet } from '@/problems/unique/impl_set';
import { uniqueBySortScan } from '@/problems/unique/impl_sort_scan';
import { uniqueWithMap } from '@/problems/unique/impl_map';

const SMALL = randomInts(1_000, 100);
const MED = randomInts(100_000, 10_000);

describe('unique benches', () => {
  bench('Set (1k)', () => {
    uniqueWithSet(SMALL);
  });
  bench('Sort+scan (1k)', () => {
    uniqueBySortScan(SMALL);
  });
  bench('Map (1k)', () => {
    uniqueWithMap(SMALL);
  });

  bench('Set (100k)', () => {
    uniqueWithSet(MED);
  });
  bench('Sort+scan (100k)', () => {
    uniqueBySortScan(MED);
  });
  bench('Map (100k)', () => {
    uniqueWithMap(MED);
  });
});
