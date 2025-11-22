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
