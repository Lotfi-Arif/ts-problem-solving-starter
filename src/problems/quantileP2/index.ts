export interface Quantile {
  push(x: number): void;
  value(): number;
}
export const spec = 'Compare P² algorithm vs reservoir sampling + sort.';
