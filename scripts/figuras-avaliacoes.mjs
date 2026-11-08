// Gera as figuras SVG das avaliações em public/images/avaliacoes/<slug>/<nome>.<lang>.svg.
// Uso: node scripts/figuras-avaliacoes.mjs
// Cores: tokens do site (global.css). Intervenção em terracota, comparador em azul;
// par validado com o validador de paleta (claro sobre #faf6ee, escuro sobre #26221d).
import { mkdirSync, writeFileSync } from 'node:fs';

const W = 680;
const SANS = "'Inter Variable', Inter, system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif";
const SERIF = "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif";

const STYLE = `
.bg{fill:#faf6ee;stroke:#e2d9c8}
.t{fill:#211c16}.m{fill:#6b6257}
.a{fill:#c4643f}.b{fill:#3f6ea8}.n{fill:#b3a898}
.ia{fill:#fff}.in{fill:#211c16}
.grid{stroke:#e2d9c8}.ax{stroke:#6b6257}.ink{stroke:#211c16}.inkf{fill:#211c16}
.ref{stroke:#c4643f}.reft{fill:#c4643f}
text{font-family:${SANS}}
.v{font-family:${SERIF};font-size:18px}
@media (prefers-color-scheme: dark){
.bg{fill:#26221d;stroke:#3a342c}
.t{fill:#efe8dc}.m{fill:#a89f92}
.a{fill:#cc6d4e}.b{fill:#5f8fd6}.n{fill:#6b6257}
.ia{fill:#1d1a16}.in{fill:#efe8dc}
.grid{stroke:#3a342c}.ax{stroke:#a89f92}.ink{stroke:#efe8dc}.inkf{fill:#efe8dc}
.ref{stroke:#e0896a}.reft{fill:#e0896a}
}`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const num = (lang, x, d = 1) => {
  const s = x.toFixed(d);
  return lang === 'pt' ? s.replace('.', ',') : s;
};

/** Envelope: cartão com título curto no topo e nota opcional no rodapé. */
function svg({ title, note, height, body, alt }) {
  const H = height + (note ? 26 : 0);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(alt)}">
<title>${esc(alt)}</title>
<style>${STYLE}</style>
<rect class="bg" x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="10"/>
<text class="m" x="24" y="34" font-size="13">${esc(title)}</text>
${body}
${note ? `<text class="m" x="24" y="${H - 18}" font-size="12">${esc(note)}</text>` : ''}
</svg>
`;
}

/** Barras horizontais. rows: {label, sub?, value, text, cls ('a'|'b'), group?}. */
function bars({ rows, max, x0 = 220, x1 = 560, top = 58 }) {
  let y = top;
  const out = [];
  for (const r of rows) {
    if (r.group) {
      y += 6;
      out.push(`<text class="t" x="24" y="${y + 12}" font-size="13" font-weight="600">${esc(r.group)}</text>`);
      y += 26;
      continue;
    }
    const w = Math.max(2, ((x1 - x0) * r.value) / max);
    const cy = y + 14;
    out.push(`<text class="t" x="24" y="${cy + (r.sub ? -2 : 4)}" font-size="13">${esc(r.label)}</text>`);
    if (r.sub) out.push(`<text class="m" x="24" y="${cy + 13}" font-size="11.5">${esc(r.sub)}</text>`);
    out.push(`<rect class="${r.cls}" x="${x0}" y="${cy - 9}" width="${w.toFixed(1)}" height="18" rx="3"/>`);
    out.push(`<text class="t v" x="${x0 + w + 10}" y="${cy + 6}">${esc(r.text)}</text>`);
    y += r.sub ? 40 : 34;
  }
  return { body: out.join('\n'), height: y + 10 };
}

/** Floresta. rows: {label, sub?, est, lo?, hi?, text}. Escala log ou linear. */
function forest({ rows, ticks, min, max, log = true, ref = 1, tickFmt, dirs, x0 = 250, x1 = 500, top = 56 }) {
  const f = log ? Math.log : (v) => v;
  const X = (v) => x0 + ((f(v) - f(min)) / (f(max) - f(min))) * (x1 - x0);
  const out = [];
  let y = top;
  const yStart = y;
  for (const r of rows) {
    const cy = y + 18;
    out.push(`<text class="t" x="24" y="${cy + (r.sub ? -2 : 4)}" font-size="13">${esc(r.label)}</text>`);
    if (r.sub) out.push(`<text class="m" x="24" y="${cy + 13}" font-size="11.5">${esc(r.sub)}</text>`);
    if (r.lo != null) {
      out.push(`<line class="ink" x1="${X(r.lo).toFixed(1)}" x2="${X(r.hi).toFixed(1)}" y1="${cy}" y2="${cy}" stroke-width="2"/>`);
    }
    out.push(`<circle class="inkf" cx="${X(r.est).toFixed(1)}" cy="${cy}" r="5"/>`);
    out.push(`<text class="t" x="${x1 + 16}" y="${cy + 4}" font-size="13">${esc(r.text)}</text>`);
    y += 40;
  }
  const yEnd = y;
  out.unshift(`<line class="ax" x1="${X(ref).toFixed(1)}" x2="${X(ref).toFixed(1)}" y1="${yStart}" y2="${yEnd}" stroke-width="1" stroke-dasharray="3 3"/>`);
  out.push(`<line class="grid" x1="${x0}" x2="${x1}" y1="${yEnd + 2}" y2="${yEnd + 2}" stroke-width="1"/>`);
  for (const t of ticks) {
    out.push(`<line class="ax" x1="${X(t).toFixed(1)}" x2="${X(t).toFixed(1)}" y1="${yEnd + 2}" y2="${yEnd + 7}"/>`);
    out.push(`<text class="m" x="${X(t).toFixed(1)}" y="${yEnd + 21}" font-size="12" text-anchor="middle">${esc(tickFmt(t))}</text>`);
  }
  if (dirs) {
    out.push(`<text class="m" x="${(X(ref) - 8).toFixed(1)}" y="${yEnd + 40}" font-size="11.5" text-anchor="end">← ${esc(dirs[0])}</text>`);
    out.push(`<text class="m" x="${(X(ref) + 8).toFixed(1)}" y="${yEnd + 40}" font-size="11.5">${esc(dirs[1])} →</text>`);
  }
  return { body: out.join('\n'), height: yEnd + (dirs ? 56 : 36), X, yStart, yEnd };
}

/** Barras empilhadas. rows: {label, segs: [{v, cls, text?}], total}. */
function stacked({ rows, max, legend, x0 = 160, x1 = 590, top = 56 }) {
  const out = [];
  let y = top;
  for (const r of rows) {
    const cy = y + 16;
    out.push(`<text class="t" x="24" y="${cy + 4}" font-size="13">${esc(r.label)}</text>`);
    let x = x0;
    for (const s of r.segs) {
      const w = ((x1 - x0) * s.v) / max;
      out.push(`<rect class="${s.cls}" x="${x.toFixed(1)}" y="${cy - 11}" width="${Math.max(0, w - 2).toFixed(1)}" height="22" rx="3"/>`);
      if (s.text && w > 30) {
        const tc = s.cls === 'n' ? 'in' : 'ia';
        out.push(`<text class="${tc}" x="${(x + w / 2 - 1).toFixed(1)}" y="${cy + 4.5}" font-size="12.5" font-weight="600" text-anchor="middle">${esc(s.text)}</text>`);
      }
      x += w;
    }
    if (r.total) out.push(`<text class="m" x="${(x + 8).toFixed(1)}" y="${cy + 4}" font-size="12.5">${esc(r.total)}</text>`);
    y += 38;
  }
  if (legend) {
    let lx = x0;
    y += 6;
    for (const l of legend) {
      out.push(`<rect class="${l.cls}" x="${lx}" y="${y}" width="12" height="12" rx="2"/>`);
      out.push(`<text class="m" x="${lx + 18}" y="${y + 10.5}" font-size="12.5">${esc(l.text)}</text>`);
      lx += 30 + l.text.length * 7;
    }
    y += 22;
  }
  return { body: out.join('\n'), height: y + 8 };
}

const figs = [];
const add = (slug, name, lang, def) => figs.push({ path: `public/images/avaliacoes/${slug}/${name}.${lang}.svg`, content: svg(def) });

// ---------- PIONEER IV, resultado final (TCT 2026) ----------
for (const lang of ['pt', 'en']) {
  const pt = lang === 'pt';
  const p = (x) => `${num(lang, x)}%`;
  const uc = pt ? 'Cuidado usual' : 'Usual care';
  const b = bars({
    max: 8,
    rows: [
      { group: 'Intention to treat' },
      { label: 'QFR', value: 7.4, text: p(7.4), cls: 'a' },
      { label: uc, value: 6.1, text: p(6.1), cls: 'b' },
      { group: 'Per protocol' },
      { label: 'QFR', value: 5.5, text: p(5.5), cls: 'a' },
      { label: uc, value: 5.3, text: p(5.3), cls: 'b' },
    ],
  });
  add('pioneer-iv-tct-2026', 'poce', lang, {
    title: pt ? 'POCE em 1 ano' : 'POCE at 1 year',
    alt: pt
      ? 'POCE em 1 ano. Intention to treat: QFR 7,4%, cuidado usual 6,1%. Per protocol: QFR 5,5%, cuidado usual 5,3%.'
      : 'POCE at 1 year. Intention to treat: QFR 7.4%, usual care 6.1%. Per protocol: QFR 5.5%, usual care 5.3%.',
    ...b,
  });

  // Não inferioridade: diferença 1,3 pp, limite superior 3,4, margem 3,2.
  const fr = forest({
    log: false,
    min: -1,
    max: 4,
    ref: 0,
    ticks: [-1, 0, 1, 2, 3, 4],
    tickFmt: (t) => (t > 0 ? `+${t}` : String(t).replace('-', '−')),
    x0: 220,
    x1: 560,
    top: 74,
    rows: [{ label: pt ? 'QFR − cuidado usual' : 'QFR − usual care', sub: 'ITT', est: 1.3, lo: 1.3, hi: 3.4, text: '' }],
  });
  const xm = fr.X(3.2);
  const xh = fr.X(3.4);
  const cy = fr.yStart + 18;
  const extra = [
    `<line class="ref" x1="${xm.toFixed(1)}" x2="${xm.toFixed(1)}" y1="${fr.yStart - 14}" y2="${fr.yEnd}" stroke-width="1.5" stroke-dasharray="4 3"/>`,
    `<text class="reft" x="${(xm - 6).toFixed(1)}" y="${fr.yStart - 18}" font-size="12" text-anchor="end">${pt ? 'margem' : 'margin'} +${num(lang, 3.2)}</text>`,
    `<line class="ink" x1="${xh.toFixed(1)}" x2="${xh.toFixed(1)}" y1="${cy - 7}" y2="${cy + 7}" stroke-width="2"/>`,
    `<text class="t" x="${(xh + 8).toFixed(1)}" y="${cy + 4}" font-size="12.5">${num(lang, 3.4)}</text>`,
    `<text class="t" x="${fr.X(1.3).toFixed(1)}" y="${cy - 12}" font-size="12.5" text-anchor="middle">${num(lang, 1.3)}</text>`,
  ].join('\n');
  add('pioneer-iv-tct-2026', 'nao-inferioridade', lang, {
    title: pt ? 'Diferença de POCE em 1 ano, pontos percentuais' : 'Difference in 1-year POCE, percentage points',
    note: pt
      ? 'Ponto em 1,3: cálculo meu (7,4 − 6,1). Limite inferior não informado.'
      : 'Point at 1.3: my calculation (7.4 − 6.1). Lower limit not reported.',
    alt: pt
      ? 'Diferença de POCE de 1,3 ponto percentual com limite superior de 3,4, acima da margem de 3,2.'
      : 'POCE difference of 1.3 percentage points with an upper limit of 3.4, above the 3.2 margin.',
    body: fr.body + '\n' + extra,
    height: fr.height,
  });

  const s = stacked({
    max: 100,
    x0: 150,
    x1: 600,
    rows: [
      {
        label: uc,
        segs: [
          { v: 45.7, cls: 'b', text: p(45.7) },
          { v: 54.3, cls: 'n', text: p(54.3) },
        ],
      },
    ],
    legend: [
      { cls: 'b', text: pt ? 'com avaliação fisiológica' : 'physiology assessed' },
      { cls: 'n', text: pt ? 'só angiografia' : 'angiography only' },
    ],
  });
  add('pioneer-iv-tct-2026', 'cuidado-usual', lang, {
    title: pt ? 'Pacientes do braço cuidado usual' : 'Patients in the usual-care arm',
    alt: pt
      ? 'No braço cuidado usual, 45,7% tiveram avaliação fisiológica e 54,3% foram tratados só pela angiografia.'
      : 'In the usual-care arm, 45.7% had physiological assessment and 54.3% were treated on angiography alone.',
    ...s,
  });
}

// ---------- OnScene ----------
for (const lang of ['pt', 'en']) {
  const pt = lang === 'pt';
  const pc = (k, n) => `${Math.round((100 * k) / n)}%`;
  const b = bars({
    max: 60,
    x0: 250,
    x1: 560,
    rows: [
      { group: pt ? 'Braço ECPR (intervenção)' : 'ECPR arm (intervention)' },
      { label: pt ? 'Canulação tentada' : 'Cannulation attempted', sub: '34/98', value: 34.7, text: pc(34, 98), cls: 'a' },
      { label: pt ? 'Nunca canulado' : 'Never cannulated', sub: pt ? '23/46 (32 com RCE antes)' : '23/46 (32 with ROSC first)', value: 50, text: pc(23, 46), cls: 'a' },
      { group: pt ? 'Braço convencional' : 'Conventional arm' },
      { label: pt ? 'ECPR no hospital' : 'In-hospital ECPR', sub: '6/24', value: 25, text: pc(6, 24), cls: 'b' },
      { label: pt ? 'Sem ECPR' : 'No ECPR', sub: '11/63', value: 17.5, text: pc(11, 63), cls: 'b' },
    ],
  });
  add('onscene-ecpr-pre-hospitalar', 'sobrevida-subgrupos', lang, {
    title: pt ? 'Sobrevida à alta por subgrupo' : 'Survival to discharge by subgroup',
    note: pt ? 'Subgrupos não randomizados. Nunca canulado e sem ECPR: cálculo meu.' : 'Nonrandomized subgroups. Never cannulated and no ECPR: my calculation.',
    alt: pt
      ? 'Sobrevida à alta: braço ECPR com canulação tentada 35%, braço ECPR nunca canulado 50%, convencional com ECPR no hospital 25%, convencional sem ECPR 17%.'
      : 'Survival to discharge: ECPR arm with cannulation attempted 35%, ECPR arm never cannulated 50%, conventional with in-hospital ECPR 25%, conventional without ECPR 17%.',
    ...b,
  });

  const st = [
    ['Rotterdam', pt ? 'Roterdã' : 'Rotterdam', 87, 8],
    ['Nijmegen', 'Nijmegen', 40, 12],
    ['Groningen', 'Groningen', 8, 16],
    ['Amsterdam', pt ? 'Amsterdã' : 'Amsterdam', 9, 51],
  ];
  const s = stacked({
    max: 95,
    x0: 130,
    x1: 600,
    rows: st.map(([, label, e, c]) => ({
      label,
      segs: [
        { v: e, cls: 'a', text: String(e) },
        { v: c, cls: 'b', text: String(c) },
      ],
    })),
    legend: [
      { cls: 'a', text: 'ECPR' },
      { cls: 'b', text: pt ? 'Convencional' : 'Conventional' },
    ],
  });
  add('onscene-ecpr-pre-hospitalar', 'pacientes-por-base', lang, {
    title: pt ? 'Pacientes por base de helicóptero (Tabela S9)' : 'Patients by helicopter base (Table S9)',
    note: pt ? 'Bases identificadas pela lista de instituições do Suplemento; totais batem com a Tabela S9.' : 'Bases identified from the Supplement list of institutions; totals match Table S9.',
    alt: pt
      ? 'Pacientes ECPR e convencionais por base: Roterdã 87 e 8, Nijmegen 40 e 12, Groningen 8 e 16, Amsterdã 9 e 51.'
      : 'ECPR and conventional patients by base: Rotterdam 87 and 8, Nijmegen 40 and 12, Groningen 8 and 16, Amsterdam 9 and 51.',
    ...s,
  });

  const ci = (e, l, h) => `${num(lang, e, 2)} (${num(lang, l, 2)}–${num(lang, h, 2)})`;
  const fr = forest({
    min: 0.5,
    max: 8,
    ticks: [0.5, 1, 2, 4, 8],
    tickFmt: (t) => num(lang, t, t < 1 ? 1 : 0),
    dirs: pt ? ['convencional', 'ECPR'] : ['conventional', 'ECPR'],
    rows: [
      { label: pt ? 'GEE, artigo' : 'GEE, paper', est: 2.72, lo: 1.59, hi: 4.66, text: ci(2.72, 1.59, 4.66) },
      { label: pt ? 'Bruto, sem cluster' : 'Crude, no clustering', sub: pt ? 'cálculo meu' : 'my calculation', est: 2.7, lo: 1.44, hi: 5.05, text: ci(2.7, 1.44, 5.05) },
      { label: pt ? 'Estratificado por base' : 'Stratified by base', sub: pt ? 'Mantel-Haenszel, cálculo meu' : 'Mantel-Haenszel, my calculation', est: 2.27, text: pt ? `${num(lang, 2.27, 2)} (sem IC)` : `${num(lang, 2.27, 2)} (no CI)` },
      { label: pt ? 'Sem Roterdã' : 'Excluding Rotterdam', sub: pt ? 'cálculo meu' : 'my calculation', est: 2.13, lo: 0.98, hi: 4.61, text: ci(2.13, 0.98, 4.61) },
      { label: pt ? 'Só FV/TV' : 'VF/VT only', sub: pt ? 'cálculo meu' : 'my calculation', est: 2.23, lo: 1.15, hi: 4.34, text: ci(2.23, 1.15, 4.34) },
    ],
  });
  add('onscene-ecpr-pre-hospitalar', 'or-sobrevida', lang, {
    title: pt ? 'OR de sobrevida à alta e IC 95%, escala log' : 'Odds ratio for survival to discharge and 95% CI, log scale',
    alt: pt
      ? 'OR de sobrevida: GEE do artigo 2,72 (1,59 a 4,66); bruto 2,70 (1,44 a 5,05); estratificado por base 2,27; sem Roterdã 2,13 (0,98 a 4,61); só FV/TV 2,23 (1,15 a 4,34).'
      : 'Survival odds ratio: paper GEE 2.72 (1.59 to 4.66); crude 2.70 (1.44 to 5.05); stratified by base 2.27; excluding Rotterdam 2.13 (0.98 to 4.61); VF/VT only 2.23 (1.15 to 4.34).',
    ...fr,
  });
}

// ---------- ISCHEMIA-EXTEND ----------
for (const lang of ['pt', 'en']) {
  const pt = lang === 'pt';
  const ci = (e, l, h) => `${num(lang, e, 2)} (${num(lang, l, 2)}–${num(lang, h, 2)})`;
  const fr = forest({
    min: 0.7,
    max: 1.5,
    ticks: [0.7, 0.8, 0.9, 1, 1.2, 1.5],
    tickFmt: (t) => num(lang, t, 1),
    dirs: pt ? ['favorece invasiva', 'favorece conservadora'] : ['favors invasive', 'favors conservative'],
    rows: [
      { label: pt ? 'Morte por qualquer causa' : 'All-cause death', sub: pt ? 'HR ajustado' : 'adjusted HR', est: 0.97, lo: 0.86, hi: 1.09, text: ci(0.97, 0.86, 1.09) },
      { label: pt ? 'Morte cardiovascular' : 'Cardiovascular death', sub: pt ? 'HR causa-específico' : 'cause-specific HR', est: 0.88, lo: 0.75, hi: 1.02, text: ci(0.88, 0.75, 1.02) },
      { label: pt ? 'Morte não cardiovascular' : 'Noncardiovascular death', sub: pt ? 'HR causa-específico' : 'cause-specific HR', est: 1.18, lo: 0.96, hi: 1.45, text: ci(1.18, 0.96, 1.45) },
      { label: pt ? 'Morte não CV, reclassificada' : 'Non-CV death, reclassified', sub: pt ? '98 óbitos de causa desconhecida' : '98 deaths of unknown cause', est: 1.1, lo: 0.92, hi: 1.33, text: ci(1.1, 0.92, 1.33) },
    ],
  });
  add('ischemia-extend', 'hr-por-causa', lang, {
    title: pt ? 'Invasiva vs conservadora, HR e IC 95%, escala log' : 'Invasive vs conservative, HR and 95% CI, log scale',
    alt: pt
      ? 'HR invasiva vs conservadora: morte por qualquer causa 0,97 (0,86 a 1,09); cardiovascular 0,88 (0,75 a 1,02); não cardiovascular 1,18 (0,96 a 1,45); não cardiovascular após reclassificação 1,10 (0,92 a 1,33).'
      : 'HR invasive vs conservative: all-cause death 0.97 (0.86 to 1.09); cardiovascular 0.88 (0.75 to 1.02); noncardiovascular 1.18 (0.96 to 1.45); noncardiovascular after reclassification 1.10 (0.92 to 1.33).',
    ...fr,
  });

  const s = stacked({
    max: 553,
    x0: 150,
    x1: 560,
    rows: [
      { label: pt ? 'Invasiva' : 'Invasive', segs: [{ v: 308, cls: 'a', text: '308' }, { v: 193, cls: 'b', text: '193' }, { v: 17, cls: 'n' }], total: '518' },
      { label: pt ? 'Conservadora' : 'Conservative', segs: [{ v: 364, cls: 'a', text: '364' }, { v: 166, cls: 'b', text: '166' }, { v: 23, cls: 'n' }], total: '553' },
    ],
    legend: [
      { cls: 'a', text: pt ? 'cardiovascular' : 'cardiovascular' },
      { cls: 'b', text: pt ? 'não cardiovascular' : 'noncardiovascular' },
      { cls: 'n', text: pt ? 'não classificada' : 'unclassified' },
    ],
  });
  add('ischemia-extend', 'obitos-por-causa', lang, {
    title: pt ? 'Óbitos por causa, seguimento mediano de 9 anos' : 'Deaths by cause, median follow-up 9 years',
    note: pt ? 'Não classificados: 17 e 23 (40 no total), por diferença.' : 'Unclassified: 17 and 23 (40 in total), by subtraction.',
    alt: pt
      ? 'Óbitos na estratégia invasiva: 308 cardiovasculares, 193 não cardiovasculares, 17 não classificados, total 518. Na conservadora: 364, 166 e 23, total 553.'
      : 'Deaths with the invasive strategy: 308 cardiovascular, 193 noncardiovascular, 17 unclassified, total 518. Conservative: 364, 166 and 23, total 553.',
    ...s,
  });
}

for (const f of figs) {
  mkdirSync(f.path.replace(/\/[^/]+$/, ''), { recursive: true });
  writeFileSync(f.path, f.content);
}
console.log(`${figs.length} figuras gravadas`);
