import { describe, expect, it } from 'vitest';
import { read } from './dist';


describe('build', () => {
  it('gera a home em português', () => {
    expect(read('index.html')).toContain('lang="pt"');
  });
});
