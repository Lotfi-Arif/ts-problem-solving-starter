export type Point = { x: number; y: number };
export type Segment = { a: Point; b: Point };
export type RoadNet = Segment[];
export type Snap = (trace: ReadonlyArray<Point>, roads: RoadNet) => Point[];
export const spec = 'Nearest-segment baseline; DP to smooth path (Viterbi-lite).';
