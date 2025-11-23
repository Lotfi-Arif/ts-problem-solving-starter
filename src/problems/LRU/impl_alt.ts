import { LRU } from './index';

export class LRU_Array<K, V> implements LRU<K, V> {
  /* TODO baseline */ get(): V | undefined {
    return undefined;
  }
  set(): void {}
  size() {
    return 0;
  }
}
