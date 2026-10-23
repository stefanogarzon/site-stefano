import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

let built = false;

/** Roda `astro build` uma vez por processo de teste. */
export function build() {
  if (built) return;
  execSync('npx astro build', { stdio: 'pipe' });
  built = true;
}

export const exists = (path: string) => existsSync(`dist/${path}`);
export const read = (path: string) => readFileSync(`dist/${path}`, 'utf8');
