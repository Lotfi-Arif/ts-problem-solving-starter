export type Graph = ReadonlyMap<number, ReadonlyArray<number>>;
export type Toposort = (g: Graph) => number[] | null; // null if cycle
export const spec = 'Kahn vs DFS; detect cycles.';
