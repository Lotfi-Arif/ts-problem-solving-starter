export const randomInts = (n: number, maxExclusive: number, seed = 42): number[] => {
  let s = BigInt(seed);
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    // xorshift64*
    s ^= s << 13n;
    s ^= s >> 7n;
    s ^= s << 17n;
    const u = Number((s * 0x2545f4914f6cdd1dn) & ((1n << 53n) - 1n));
    out.push(u % maxExclusive);
  }
  return out;
};

export const randomArrays = (
  rows: number,
  cols: number,
  maxExclusive: number,
  seed = 42,
): number[][] => {
  let s = BigInt(seed);
  const out: number[][] = new Array(rows);

  const next = () => {
    // xorshift64*
    s ^= s << 13n;
    s ^= s >> 7n;
    s ^= s << 17n;
    const u = Number((s * 0x2545f4914f6cdd1dn) & ((1n << 53n) - 1n));
    return u % maxExclusive;
  };

  for (let r = 0; r < rows; r++) {
    const row = new Array<number>(cols);
    for (let c = 0; c < cols; c++) row[c] = next();
    out[r] = row;
  }

  return out;
};
