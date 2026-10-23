import { execSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('arquivos publicados', () => {
  it('tudo em public/ está no git (senão o deploy da Cloudflare não recebe)', () => {
    const tracked = new Set(execSync('git ls-files public', { encoding: 'utf8' }).split('\n'));
    const onDisk = (readdirSync('public', { recursive: true, withFileTypes: true }) as import('node:fs').Dirent[])
      .filter((d) => d.isFile() && d.name !== '.DS_Store')
      .map((d) => `${d.parentPath}/${d.name}`.replace(/^\.\//, ''));
    expect(onDisk.filter((f) => !tracked.has(f))).toEqual([]);
  });
});
