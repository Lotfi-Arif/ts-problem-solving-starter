export interface LRU<K, V> {
  get(k: K): V | undefined;
  set(k: K, v: V): void;
  size(): number;
}
export const spec = 'Map + doubly-linked list baseline; compare Map+array.';
