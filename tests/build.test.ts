import { beforeAll, describe, expect, it } from 'vitest';
import { build, read } from './dist';

beforeAll(build);

describe('build', () => {
  it('gera a home em português', () => {
    expect(read('index.html')).toContain('lang="pt"');
  });
});
