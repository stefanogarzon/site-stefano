import { execSync } from 'node:child_process';

/** Um único `astro build` antes de todos os testes que leem dist/. */
export default function setup() {
  execSync('npx astro build', { stdio: 'pipe' });
}
