import { exists, read } from './dist';

/**
 * JS the page loads: inline modules plus the dist/ files their `src` points to, following the
 * relative static imports of each module (Vite moves code shared by two pages into its own chunk).
 */
export function scriptsDaPagina(html: string): string {
  const vistos = new Set<string>();
  const modulo = (path: string): string => {
    if (vistos.has(path) || !exists(path)) return '';
    vistos.add(path);
    const js = read(path);
    const dir = path.slice(0, path.lastIndexOf('/') + 1);
    return js + importsDe(js, dir);
  };
  const importsDe = (js: string, dir: string) =>
    [...js.matchAll(/\bimport\s*(?:[^'"]*?\bfrom\s*)?["'](\.{1,2}\/[^"']+)["']/g)]
      .map((m) => modulo(new URL(m[1], `file:///${dir}`).pathname.slice(1)))
      .join('');
  let js = '';
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    const src = m[1].match(/\ssrc="(\/[^"]+)"/);
    js += src ? modulo(src[1].slice(1)) : m[2];
  }
  return js;
}
