import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const name = process.argv[2];
if (!name) {
  console.error('Usage: pnpm new:ex <name>');
  process.exit(1);
}

const root = resolve('src/problems', name);
mkdirSync(root, { recursive: true });

const files: Record<string, string> = {
  [resolve('tests', `${name}.test.ts`)]: `import { describe, it, expect } from 'vitest';


describe('${name}', () => {
it('works', () => { expect(true).toBe(true); });
});
`,
  [resolve('bench', `${name}.bench.ts`)]: `import { bench, describe } from 'vitest';


describe('${name} benches', () => { bench('baseline', () => {}); });
`,
};

for (const [p, content] of Object.entries(files)) writeFileSync(p, content);
console.log('Scaffolded', name);
