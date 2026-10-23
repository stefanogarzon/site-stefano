import { describe, expect, it } from 'vitest';
import { alternateUrl, categorySlug, entryUrl, formatDate, published, t } from '../src/i18n/utils';

const e = (id: string, data: Record<string, unknown>) => ({
  id,
  collection: 'reviews' as const,
  data: { title: id, date: new Date('2026-01-01'), draft: false, translationKey: id.split('/')[1], ...data },
});

describe('i18n', () => {
  it('t traduz rótulos', () => {
    expect(t('pt', 'opinion')).toBe('Opinião');
    expect(t('en', 'opinion')).toBe('Opinion');
  });

  it('categorySlug converte para inglês', () => {
    expect(categorySlug('estatistica', 'en')).toBe('statistics');
    expect(categorySlug('computacao', 'pt')).toBe('computacao');
  });

  it('formatDate', () => {
    expect(formatDate(new Date('2026-10-20T12:00:00Z'), 'pt')).toBe('20 out 2026');
    expect(formatDate(new Date('2026-10-20T12:00:00Z'), 'en')).toBe('Oct 20, 2026');
  });

  it('entryUrl usa a rota do idioma', () => {
    expect(entryUrl(e('pt/estatina', { lang: 'pt' }))).toBe('/avaliacoes/estatina/');
    expect(entryUrl(e('en/statin', { lang: 'en' }))).toBe('/en/reviews/statin/');
    expect(entryUrl({ ...e('pt/p-valor', { lang: 'pt' }), collection: 'posts' })).toBe('/textos/p-valor/');
  });

  it('alternateUrl aponta para a tradução quando existe', () => {
    const pt = e('pt/estatina', { lang: 'pt', translationKey: 'statin' });
    const en = e('en/statin', { lang: 'en', translationKey: 'statin' });
    expect(alternateUrl(pt, [pt, en])).toBe('/en/reviews/statin/');
  });

  it('alternateUrl ignora tradução em rascunho e cai na home', () => {
    const pt = e('pt/estatina', { lang: 'pt', translationKey: 'statin' });
    const en = e('en/statin', { lang: 'en', translationKey: 'statin', draft: true });
    expect(alternateUrl(pt, [pt, en])).toBe('/en/');
    const soEn = e('en/only', { lang: 'en' });
    expect(alternateUrl(soEn, [pt, soEn])).toBe('/');
  });

  it('published remove rascunhos e ordena por data desc', () => {
    const a = e('pt/a', { lang: 'pt', date: new Date('2026-01-01') });
    const b = e('pt/b', { lang: 'pt', date: new Date('2026-03-01') });
    const c = e('pt/c', { lang: 'pt', draft: true });
    expect(published([a, b, c]).map((x) => x.id)).toEqual(['pt/b', 'pt/a']);
  });
});
