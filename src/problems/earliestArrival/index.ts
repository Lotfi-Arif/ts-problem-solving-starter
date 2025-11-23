import { Pos } from '../shortestPath';

export type TLCell = { openAt: (t: number) => boolean }; // simplified
export type TLGrid = TLCell[][];
export type Earliest = (g: TLGrid, start: Pos, goal: Pos) => number | null;
export const spec = 'BFS in time-expanded graph; periods with mod arithmetic.';
