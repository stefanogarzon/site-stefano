import { execSync } from 'node:child_process';
import { copyFileSync, mkdirSync } from 'node:fs';
import { TURNSTILE_TEST_SITEKEY } from '../src/lib/turnstile';

/** Um único `astro build` com o conteúdo de tests/fixtures/ antes dos testes que leem dist/. */
export default function setup() {
  execSync('npm run build', {
    stdio: 'pipe',
    env: { ...process.env, FIXTURES: '1', PUBLIC_TURNSTILE_SITEKEY: TURNSTILE_TEST_SITEKEY },
  });
  mkdirSync('dist/images/uploads', { recursive: true });
  copyFileSync('tests/fixtures/images/capa-teste.png', 'dist/images/uploads/capa-teste.png');
}
