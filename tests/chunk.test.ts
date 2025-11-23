import { describe, it, expect } from 'vitest';
import { chunk_loop, chunk_map, chunk_reduce } from '@/problems/chunk/impl_baseline';
import { chunk_gen } from '@/problems/chunk/impl_alt';

describe('chunk', () => {
  it('chunk_loop splits into equal parts and tail', () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = chunk_loop(numbers, 3);

    expect(result).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });
  it('chunk_map splits into equal parts and tail', () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = chunk_map(numbers, 3);
    expect(result).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });
  it('chunk_reduce splits into equal parts and tail', () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = chunk_reduce(numbers, 3);
    expect(result).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });
  it('chunk_gen splits into equal parts and tail', () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = chunk_gen(numbers, 3);
    expect(result.next().value).toStrictEqual([1, 2, 3]);
    expect(result.next().value).toStrictEqual([4, 5, 6]);
    expect(result.next().value).toStrictEqual([7, 8, 9]);
    expect(result.next().value).toStrictEqual([10]);
  });
});
