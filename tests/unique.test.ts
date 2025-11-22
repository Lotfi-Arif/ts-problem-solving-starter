import { describe, expect, it } from 'vitest';
import { uniqueWithSet } from '@/problems/unique/impl_set';
import { uniqueBySortScan } from '@/problems/unique/impl_sort_scan';
import { uniqueWithMap } from '@/problems/unique/impl_map';
import { randomInts } from '@/problems/utils/gen';

const DATA = randomInts(1000, 100);

const EXPECTED = Array.from(new Set(DATA));

describe('unique implementations', () => {
  it('Set preserves first occurrence order', () => {
    expect(uniqueWithSet(DATA)).toEqual(EXPECTED);
  });
  it('Sort+scan dedupes but reorders', () => {
    const r = uniqueBySortScan(DATA);
    // should have same membership
    expect(new Set(r).size).toBe(new Set(EXPECTED).size);
    // but likely a different order
    expect(r).not.toEqual(EXPECTED);
  });
  it('Map returns same membership as Set', () => {
    const r = uniqueWithMap(DATA);
    expect(new Set(r).size).toBe(new Set(EXPECTED).size);
  });
});
