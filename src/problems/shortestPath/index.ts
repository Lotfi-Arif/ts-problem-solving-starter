export type Grid = number[][]; // weights >= 0; 4-neighbors
export type Pos = { r: number; c: number };
export type Shortest = (g: Grid, s: Pos, t: Pos) => number | null;
export const spec = 'Priority queue vs naive; compare with BFS when all weights=1';
