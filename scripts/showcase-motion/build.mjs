// Bundles the four Motion & Film artifacts' JS with esbuild, tree-shaken from pinned packages,
// into public/showcase/motion/vendor/. The portfolio app takes on no dependency: this script
// runs from its own throwaway node_modules (see scripts/showcase-motion/package.json).
//
//   cd scripts/showcase-motion && npm ci && node build.mjs
//
// Prints the byte size of each bundle, raw and gzipped, for docs/showcase-motion-spec.md.
import { build } from 'esbuild';
import { gzipSync } from 'node:zlib';
import { readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', '..', 'public', 'showcase', 'motion', 'vendor');
const entries = ['timeline', 'morph', 'physics', 'shader'];

for (const name of entries) {
  const outfile = join(out, `${name}.js`);
  await build({
    entryPoints: [join(here, 'src', `${name}.js`)],
    bundle: true,
    minify: true,
    format: 'iife',
    target: ['es2019'],
    legalComments: 'none',
    outfile,
    banner: { js: `/* ${name} — built by scripts/showcase-motion/build.mjs; see docs/showcase-motion-spec.md for licences */` },
  });
  const raw = statSync(outfile).size, gz = gzipSync(readFileSync(outfile)).length;
  console.log(`${name.padEnd(9)} ${(raw / 1024).toFixed(1).padStart(7)} KB raw ${(gz / 1024).toFixed(1).padStart(7)} KB gzip`);
}
