# Practical JS/TS Toolbox

## Methods
- map: transform each element, 1:1 output. Use: stateless conversions. Avoid: if you need filtering or side effects.
- filter: keep some elements, order preserved. Use: predicate-based selection.
- reduce: fold to a single value/structure. Use: custom aggregation. Avoid: forcing fancy one-liners when a loop is clearer.
- some / every: existence / universal tests. Use: guards, early exit semantics.
- find / findIndex: first match. Use: early stop; read-only search.
- flat / flatMap: flattening one level / map+flatten. Use: list-of-lists.
- Set: uniqueness; membership O(1). Use: dedupe, membership tests.
- Map: arbitrary keys with O(1) ops. Use: counts, adjacency lists.
- Loops (for, for...of): best control & perf; prefer when stateful or multi-branch logic.

> Heuristic: if you need indexes or multi-collection coordination, a for loop is often clearer; if it’s a pure 1:1 transform, map is perfect; aggregations → reduce; selection → filter.
