// Генератор SVG-схем для заметки о σ₃ (движок plane() взят из poryadki_v_sigma3.html).
const fs = require('fs');
const path = require('path');
const OUT = process.argv[2];
fs.mkdirSync(OUT, { recursive: true });

const LIM = 4, S = 30, PAD = 16, W = 2 * LIM * S + 2 * PAD;
const X = a => PAD + (a + LIM) * S, Y = b => PAD + (LIM - b) * S;
const E = 1e-9;
const s3 = (a, b) => !(a > 1 + E && b < -1 - E);
const esc = t => String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const f = v => String(v).replace('.', ',').replace('-', '−');

const STYLE = `
.bg{fill:#ffffff}
.g-grid{stroke:#e1e6ec;stroke-width:1}
.g-axis{stroke:#8b94a3;stroke-width:1.2}
.g-cell{stroke:#8b94a3;stroke-width:1;stroke-dasharray:4 4}
.g-tick{fill:#5a6474;font-family:Consolas,monospace;font-size:10px}
.g-reg{fill:rgba(47,111,176,0.22);shape-rendering:crispEdges}
.g-faint{fill:rgba(47,111,176,0.08);shape-rendering:crispEdges}
.g-diag{stroke:#8b94a3;stroke-width:1;stroke-dasharray:5 4}
.g-regdiag{stroke:#2f6fb0;stroke-width:3.5;stroke-linecap:round}
.g-removed{fill:url(#hatch);stroke:#b4553b;stroke-width:1}
.g-hl{stroke:#b4553b;stroke-width:1.3;opacity:0.75}
.g-free{fill:rgba(44,138,77,0.22);stroke:#2c8a4d;stroke-width:1.5}
.g-box{fill:rgba(184,121,15,0.18);stroke:#b8790f;stroke-width:1.5}
.g-kill{stroke:#c33a2c;stroke-width:9;opacity:0.22}
.g-pt{stroke:#ffffff;stroke-width:2}
.g-pt.ok{fill:#2c8a4d}.g-pt.bad{fill:#c33a2c}.g-pt.neu{fill:#8b94a3}.g-pt.reg{fill:#2f6fb0}.g-pt.pair{fill:#b8790f}
.g-ring{fill:#ffffff;stroke-width:3}
.g-ring.ok{stroke:#2c8a4d}.g-ring.bad{stroke:#c33a2c}
.g-lab{font-family:Consolas,monospace;font-size:11px;fill:#1b2330;paint-order:stroke;stroke:#ffffff;stroke-width:3.5px;stroke-linejoin:round}
.g-txt{font-family:'Segoe UI',sans-serif;font-size:11.5px;fill:#1b2330;paint-order:stroke;stroke:#ffffff;stroke-width:3.5px;stroke-linejoin:round}
.g-txt.rem{fill:#b4553b;font-weight:600}.g-txt.ok{fill:#2c8a4d;font-weight:600}.g-txt.bad{fill:#c33a2c;font-weight:600}
.g-txt.pair{fill:#b8790f;font-weight:600}.g-txt.mut{fill:#5a6474}.g-txt.reg{fill:#2f6fb0;font-weight:600}
.g-mline{stroke:#b8790f;stroke-width:1;stroke-dasharray:2 3;opacity:0.8}
.g-mirror{stroke:#b8790f;stroke-width:1.5;stroke-dasharray:4 3}
.g-path{stroke:#1b2330;stroke-width:1.8;fill:none}
.g-short{stroke-width:1.8;stroke-dasharray:2 4;stroke-linecap:round;fill:none}
.g-short.ok{stroke:#2c8a4d}.g-short.bad{stroke:#c33a2c}
.g-arrowhead{fill:#1b2330}
.nl-line{stroke:#8b94a3;stroke-width:1.5}
.nl-zone{font-family:'Segoe UI',sans-serif;font-size:13px;fill:#1b2330;font-weight:600}
.nl-sub{font-family:Consolas,monospace;font-size:11px;fill:#5a6474}
.nl-ok{stroke:#2c8a4d;stroke-width:2;fill:none}.nl-bad{stroke:#c33a2c;stroke-width:2;fill:none}
.nl-okh{fill:#2c8a4d}.nl-badh{fill:#c33a2c}
.nl-piece{stroke-width:3;fill:none}
`;
const DEFS = `<defs>
<pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line class="g-hl" x1="0" y1="0" x2="0" y2="6"/></pattern>
<marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="g-arrowhead" d="M0,0 L10,5 L0,10 z"/></marker>
<marker id="arrok" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="nl-okh" d="M0,0 L10,5 L0,10 z"/></marker>
<marker id="arrbad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="nl-badh" d="M0,0 L10,5 L0,10 z"/></marker>
</defs>`;
const open = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><style>${STYLE}</style>${DEFS}<rect class="bg" width="${w}" height="${h}"/>`;

function raster(pred, cls, keepDiag) {
  let h = '';
  const st = 0.1, n = Math.round(2 * LIM / st);
  for (let j = 0; j < n; j++) {
    const b = -LIM + st / 2 + st * j;
    let start = null;
    for (let i = 0; i <= n; i++) {
      const a = -LIM + st / 2 + st * i;
      const on = i < n && (keepDiag || i !== j) && pred(a, b);
      if (on && start === null) start = i;
      if (!on && start !== null) {
        h += `<rect class="${cls}" x="${X(-LIM + st * start)}" y="${Y(b + st / 2)}" width="${((i - start) * st * S).toFixed(1)}" height="${(st * S).toFixed(1)}"/>`;
        start = null;
      }
    }
  }
  return h;
}

function plane(o) {
  let h = open(W, W);
  for (let k = -LIM; k <= LIM; k++) {
    h += `<line class="g-grid" x1="${X(k)}" y1="${Y(-LIM)}" x2="${X(k)}" y2="${Y(LIM)}"/><line class="g-grid" x1="${X(-LIM)}" y1="${Y(k)}" x2="${X(LIM)}" y2="${Y(k)}"/>`;
  }
  if (o.faint) h += raster(o.faint, 'g-faint');
  if (o.region) h += raster(o.region, 'g-reg', o.keepDiag);
  (o.under || []).forEach(m => { h += mark(m); });
  if (o.removed !== false) h += `<rect class="g-removed" x="${X(1)}" y="${Y(-1)}" width="${3 * S}" height="${3 * S}"/>`;
  if (o.cells) {
    [-1, 1].forEach(k => {
      h += `<line class="g-cell" x1="${X(k)}" y1="${Y(-LIM)}" x2="${X(k)}" y2="${Y(LIM)}"/><line class="g-cell" x1="${X(-LIM)}" y1="${Y(k)}" x2="${X(LIM)}" y2="${Y(k)}"/>`;
    });
  }
  h += `<line class="g-axis" x1="${X(-LIM)}" y1="${Y(0)}" x2="${X(LIM)}" y2="${Y(0)}"/><line class="g-axis" x1="${X(0)}" y1="${Y(-LIM)}" x2="${X(0)}" y2="${Y(LIM)}"/>`;
  [-3, -2, -1, 1, 2, 3].forEach(k => {
    h += `<text class="g-tick" x="${X(k)}" y="${Y(0) + 12}" text-anchor="middle">${f(k)}</text>`;
    h += `<text class="g-tick" x="${X(0) - 4}" y="${Y(k) + 3.5}" text-anchor="end">${f(k)}</text>`;
  });
  h += `<text class="g-tick" x="${X(LIM) - 4}" y="${Y(0) - 5}" text-anchor="end">a</text><text class="g-tick" x="${X(0) + 5}" y="${Y(LIM) + 10}">b</text>`;
  h += `<line class="g-diag" x1="${X(-LIM)}" y1="${Y(-LIM)}" x2="${X(LIM)}" y2="${Y(LIM)}"/>`;
  if (o.diag) h += `<line class="g-regdiag" x1="${X(-LIM)}" y1="${Y(-LIM)}" x2="${X(LIM)}" y2="${Y(LIM)}"/>`;
  (o.marks || []).forEach(m => { h += mark(m); });
  return h + '</svg>';
}

function mark(m) {
  if (m.t === 'pt') return `<circle class="g-pt ${m.c || 'reg'}" cx="${X(m.a)}" cy="${Y(m.b)}" r="${m.r || 5.5}"/>` + (m.l ? lab(m) : '');
  if (m.t === 'ring') return `<circle class="g-ring ${m.c}" cx="${X(m.a)}" cy="${Y(m.b)}" r="6.5"/>` + (m.l ? lab(m) : '');
  if (m.t === 'line') return `<line class="${m.c}" x1="${X(m.a1)}" y1="${Y(m.b1)}" x2="${X(m.a2)}" y2="${Y(m.b2)}" ${m.arrow ? 'marker-end="url(#arr)"' : ''}/>`;
  if (m.t === 'rect') return `<rect class="${m.c}" x="${X(m.a1)}" y="${Y(m.b2)}" width="${(m.a2 - m.a1) * S}" height="${(m.b2 - m.b1) * S}"/>`;
  if (m.t === 'txt') return `<text class="g-txt ${m.c || ''}" x="${X(m.a)}" y="${Y(m.b)}" text-anchor="${m.anchor || 'middle'}">${esc(m.s)}</text>`;
  return '';
}
const lab = m => `<text class="g-lab" x="${X(m.a) + (m.dx ?? 8)}" y="${Y(m.b) + (m.dy ?? -8)}" text-anchor="${m.anchor || 'start'}">${esc(m.l)}</text>`;

const ptsA = (M, labels = true) => {
  const ms = [];
  M.forEach(x => {
    ms.push({ t: 'line', a1: x, b1: -LIM, a2: x, b2: LIM, c: 'g-mline' });
    ms.push({ t: 'line', a1: -LIM, b1: x, a2: LIM, b2: x, c: 'g-mline' });
  });
  M.forEach(a => M.forEach(b => {
    if (s3(a, b)) ms.push({ t: 'pt', a, b, c: a === b ? 'reg' : 'pair', l: labels && a !== b ? `(${f(a)}; ${f(b)})` : '', dy: b > a ? -8 : 16, anchor: a > 0 ? 'end' : 'start', dx: a > 0 ? -8 : 8 });
    else ms.push({ t: 'ring', a, b, c: 'bad', l: labels ? `(${f(a)}; ${f(b)}) в угле` : '', anchor: 'end', dx: -9, dy: 18 });
  }));
  return ms;
};

const saw = (cuts, dirs) => (a, b) => {
  const z = v => cuts.filter(c => v > c).length;
  const za = z(a), zb = z(b);
  if (za !== zb) return za < zb;
  return (dirs ? dirs[za] : '≥') === '≥' ? b < a - E : b > a + E;
};

const figs = {};
const put = (name, svg) => { figs[name] = svg; };

// 01 исходная картинка
put('fig01_sigma3', plane({ region: s3, diag: true, cells: true, marks: [
  { t: 'txt', a: 2.5, b: -2.4, s: 'выброшено', c: 'rem' },
  { t: 'txt', a: 2.5, b: -2.9, s: 'a > 1, b < −1', c: 'rem' },
  { t: 'txt', a: -2, b: 3.2, s: 'σ₃ — всё закрашенное', c: 'reg' },
] }));

// 02 «линия b = a?»
put('fig02_diagonal', plane({ faint: s3, diag: true, marks: [
  { t: 'txt', a: 1.2, b: 3.3, s: 'b = a: пары (a; a)', c: 'reg', anchor: 'end' },
  { t: 'txt', a: -1.6, b: -3.3, s: 'есть в любом рефлексивном', c: 'mut' },
  { t: 'txt', a: -1.6, b: -3.75, s: 'отношении, не только в σ₃', c: 'mut' },
] }));

// 03 «полоса вокруг диагонали?»
put('fig03_band', plane({ faint: s3, region: (a, b) => Math.abs(a - b) <= 0.8 + E && s3(a, b), diag: true, marks: [
  { t: 'line', a1: 0, b1: 0.6, a2: 0.6, b2: 0, c: 'g-mirror' },
  { t: 'pt', a: 0, b: 0.6, c: 'bad', l: '(0; 0,6)', anchor: 'end', dx: -8, dy: -4 },
  { t: 'pt', a: 0.6, b: 0, c: 'bad', l: '(0,6; 0)', dx: 6, dy: 16 },
  { t: 'txt', a: -3.9, b: 3.3, s: 'полоса симметрична:', c: 'bad', anchor: 'start' },
  { t: 'txt', a: -3.9, b: 2.85, s: 'точка и зеркало обе внутри', c: 'bad', anchor: 'start' },
] }));

// 04 M×M
put('fig04a_MxM_otrezok', plane({ faint: s3, under: [{ t: 'rect', a1: 2, b1: 2, a2: 3, b2: 3, c: 'g-box' }], marks: [
  { t: 'line', a1: 2, b1: -LIM, a2: 2, b2: LIM, c: 'g-mline' }, { t: 'line', a1: 3, b1: -LIM, a2: 3, b2: LIM, c: 'g-mline' },
  { t: 'line', a1: -LIM, b1: 2, a2: LIM, b2: 2, c: 'g-mline' }, { t: 'line', a1: -LIM, b1: 3, a2: LIM, b2: 3, c: 'g-mline' },
  { t: 'txt', a: 2.5, b: 3.5, s: 'M × M', c: 'pair' },
  { t: 'txt', a: -1.8, b: 3.3, s: 'M = [2; 3]: квадрат', c: 'pair' },
] }));
put('fig04b_MxM_dve_tochki', plane({ faint: s3, marks: ptsA([-3, 2]) }));

// 05 рефлексивность
put('fig05_refl', plane({ faint: s3, diag: true, marks: [
  { t: 'pt', a: -2, b: -2, l: '(−2; −2)' }, { t: 'pt', a: 2.5, b: 2.5, l: '(2,5; 2,5)', anchor: 'end', dx: -8, dy: 16 },
  { t: 'pt', a: 1, b: 0, c: 'neu', l: '(1; 0) — не важна', anchor: 'middle', dx: 0, dy: 20 },
  { t: 'txt', a: -1.6, b: 3.2, s: 'нужна только вся диагональ', c: 'reg' },
] }));

// 06 антисимметричность
put('fig06a_para_obe', plane({ faint: s3, marks: [
  { t: 'line', a1: 0, b1: 1, a2: 1, b2: 0, c: 'g-mirror' },
  { t: 'pt', a: 0, b: 1, c: 'pair', l: '(0; 1)', anchor: 'end', dx: -8 },
  { t: 'pt', a: 1, b: 0, c: 'pair', l: '(1; 0)', dy: 16 },
  { t: 'txt', a: -1.8, b: 3.2, s: 'обе в σ₃ → нарушение', c: 'bad' },
] }));
put('fig06b_para_v_ugle', plane({ faint: s3, marks: [
  { t: 'line', a1: -2, b1: 2, a2: 2, b2: -2, c: 'g-mirror' },
  { t: 'pt', a: -2, b: 2, c: 'ok', l: '(−2; 2)' },
  { t: 'ring', a: 2, b: -2, c: 'bad', l: '(2; −2)', dy: 18 },
  { t: 'txt', a: -1.2, b: 3.4, s: 'зеркало в угле → можно', c: 'ok' },
] }));
put('fig06c_zony', plane({ faint: s3, diag: true, under: [{ t: 'rect', a1: -4, b1: 1, a2: -1, b2: 4, c: 'g-free' }], marks: [
  { t: 'txt', a: -2.5, b: 2.9, s: 'свободно:', c: 'ok' },
  { t: 'txt', a: -2.5, b: 2.4, s: 'пара в угле', c: 'ok' },
  { t: 'txt', a: 1.6, b: 1.2, s: 'остальное: пары,', c: 'pair' },
  { t: 'txt', a: 1.6, b: 0.75, s: 'не больше одной', c: 'pair' },
  { t: 'txt', a: 1.6, b: 0.3, s: 'из каждой', c: 'pair' },
] }));

// 07 варианты после двух свойств
put('fig07a_var0', plane({ region: (a, b) => a < -1 - E && b > 1 + E, diag: true, marks: [{ t: 'txt', a: 1.5, b: 3.3, s: 'вариант 0', c: 'reg' }] }));
put('fig07b_var1', plane({ region: (a, b) => b > a + E, diag: true, marks: [{ t: 'txt', a: -2, b: 3.3, s: 'вариант 1: b ≥ a', c: 'reg' }] }));
put('fig07c_var2', plane({ region: (a, b) => (a < -1 - E && b > 1 + E) || (b < a && b >= a - 1 - E), diag: true, marks: [{ t: 'txt', a: 1.5, b: 3.3, s: 'вариант 2: угол + полоса', c: 'reg' }] }));

// 08 транзитивность: путь через диагональ на σ₃
put('fig08_trans_sigma3', plane({ region: s3, diag: true, marks: [
  { t: 'line', a1: 2, b1: 0, a2: 0.1, b2: 0, c: 'g-path', arrow: true },
  { t: 'line', a1: 0, b1: 0, a2: 0, b2: -1.9, c: 'g-path', arrow: true },
  { t: 'line', a1: 2, b1: 0, a2: 2, b2: -2, c: 'g-short bad' },
  { t: 'line', a1: 0, b1: -2, a2: 2, b2: -2, c: 'g-short bad' },
  { t: 'pt', a: 2, b: 0, c: 'ok', l: 'Т1 (2; 0)', dy: -8 },
  { t: 'pt', a: 0, b: 0, c: 'neu', l: '(0; 0)', anchor: 'end', dx: -8, dy: -6 },
  { t: 'pt', a: 0, b: -2, c: 'ok', l: 'Т2 (0; −2)', anchor: 'end', dx: -8, dy: 4 },
  { t: 'ring', a: 2, b: -2, c: 'bad', l: '(2; −2)', dx: 9, dy: 16 },
  { t: 'txt', a: -3.9, b: 3.3, s: 'прямой путь в угле → нарушение', c: 'bad', anchor: 'start' },
] }));
// 09 вариант 2 ломается
const v2 = (a, b) => (a < -1 - E && b > 1 + E) || (b < a && b >= a - 1 - E);
put('fig09_var2_lomaetsya', plane({ region: v2, diag: true, marks: [
  { t: 'line', a1: 2, b1: 1.2, a2: 1.3, b2: 1.2, c: 'g-path', arrow: true },
  { t: 'line', a1: 1.2, b1: 1.2, a2: 1.2, b2: 0.5, c: 'g-path', arrow: true },
  { t: 'line', a1: 2, b1: 1.2, a2: 2, b2: 0.4, c: 'g-short bad' },
  { t: 'line', a1: 1.2, b1: 0.4, a2: 2, b2: 0.4, c: 'g-short bad' },
  { t: 'pt', a: 2, b: 1.2, c: 'ok', l: '(2; 1,2)', dx: 8, dy: -4 },
  { t: 'pt', a: 1.2, b: 0.4, c: 'ok', l: '(1,2; 0,4)', anchor: 'end', dx: -8, dy: 10 },
  { t: 'ring', a: 2, b: 0.4, c: 'bad', l: '(2; 0,4)', dx: 9, dy: 14 },
  { t: 'txt', a: -1.5, b: -3.3, s: 'два шага по ≤1 вниз дают 1,6', c: 'bad' },
] }));
// 10 вариант 0 транзитивен
put('fig10_var0_tranzitiven', plane({ region: (a, b) => a < -1 - E && b > 1 + E, diag: true, marks: [
  { t: 'line', a1: 2, b1: -LIM, a2: 2, b2: LIM, c: 'g-mline' },
  { t: 'line', a1: -2, b1: 2, a2: 1.9, b2: 2, c: 'g-path', arrow: true },
  { t: 'pt', a: -2, b: 2, c: 'ok', l: 'Т1 (−2; 2)', anchor: 'end', dx: -8, dy: -8 },
  { t: 'pt', a: 2, b: 2, c: 'reg', l: '(2; 2)', dx: 8, dy: -8 },
  { t: 'pt', a: 2, b: -0.5, c: 'neu', l: 'не в отношении', anchor: 'end', dx: -8, dy: 4 },
  { t: 'txt', a: 2.15, b: -3.5, s: 'в столбце a = 2 есть только (2; 2)', c: 'mut', anchor: 'end' },
] }));
// 11 ≤ держится, ≥ без угла ломается
put('fig11a_le_derzhitsya', plane({ region: (a, b) => b > a + E, diag: true, marks: [
  { t: 'line', a1: -2, b1: 0, a2: -0.1, b2: 0, c: 'g-path', arrow: true },
  { t: 'line', a1: 0, b1: 0, a2: 0, b2: 1.9, c: 'g-path', arrow: true },
  { t: 'line', a1: -2, b1: 0, a2: -2, b2: 2, c: 'g-short ok' },
  { t: 'line', a1: 0, b1: 2, a2: -2, b2: 2, c: 'g-short ok' },
  { t: 'pt', a: -2, b: 0, c: 'ok', l: '(−2; 0)', anchor: 'end', dx: -8, dy: 14 },
  { t: 'pt', a: 0, b: 2, c: 'ok', l: '(0; 2)' },
  { t: 'ring', a: -2, b: 2, c: 'ok', l: '(−2; 2)', anchor: 'end', dx: -9, dy: -8 },
] }));
put('fig11b_ge_lomaetsya', plane({ region: (a, b) => b < a - E && s3(a, b), diag: true, marks: [
  { t: 'line', a1: 2, b1: 0, a2: 0.1, b2: 0, c: 'g-path', arrow: true },
  { t: 'line', a1: 0, b1: 0, a2: 0, b2: -1.9, c: 'g-path', arrow: true },
  { t: 'line', a1: 2, b1: 0, a2: 2, b2: -2, c: 'g-short bad' },
  { t: 'line', a1: 0, b1: -2, a2: 2, b2: -2, c: 'g-short bad' },
  { t: 'pt', a: 2, b: 0, c: 'ok', l: '(2; 0)', dy: -8 },
  { t: 'pt', a: 0, b: -2, c: 'ok', l: '(0; −2)', anchor: 'end', dx: -8, dy: 4 },
  { t: 'ring', a: 2, b: -2, c: 'bad', l: '(2; −2)', dx: 9, dy: 16 },
] }));

// 12 числовая прямая: единственный запрет
(() => {
  const w = 400, y = 70, x1 = 20, x2 = 380, xa = 140, xb = 260;
  let h = open(w, 150);
  h += `<line class="nl-line" x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/>`;
  [xa, xb].forEach((x, i) => { h += `<line class="nl-line" x1="${x}" y1="${y - 8}" x2="${x}" y2="${y + 8}"/><text class="nl-sub" x="${x}" y="${y + 22}" text-anchor="middle">${i ? '1' : '−1'}</text>`; });
  h += `<text class="nl-zone" x="${(x1 + xa) / 2}" y="${y - 14}" text-anchor="middle">маленькие</text>`;
  h += `<text class="nl-zone" x="${(xa + xb) / 2}" y="${y - 14}" text-anchor="middle">средние</text>`;
  h += `<text class="nl-zone" x="${(xb + x2) / 2}" y="${y - 14}" text-anchor="middle">большие</text>`;
  h += `<path class="nl-bad" d="M ${(xb + x2) / 2} ${y + 34} Q ${w / 2} ${y + 70} ${(x1 + xa) / 2} ${y + 34}" marker-end="url(#arrbad)"/>`;
  h += `<text class="nl-sub" x="${w / 2}" y="${y + 68}" text-anchor="middle" style="fill:#c33a2c">большое → маленькое: нельзя (и через средние тоже)</text>`;
  h += `<path class="nl-ok" d="M ${(x1 + xa) / 2} ${y - 30} Q ${w / 2} ${y - 66} ${(xb + x2) / 2} ${y - 30}" marker-end="url(#arrok)"/>`;
  h += `<text class="nl-sub" x="${w / 2}" y="${y - 50}" text-anchor="middle" style="fill:#2c8a4d">маленькое → большое: можно</text>`;
  put('fig12_zapret_na_pryamoy', h + '</svg>');
})();

// 13 каталог
const CAT = [
  ['fig13a_tolko_diagonal', (a, b) => false],
  ['fig13b_diag_ugol', (a, b) => a < -1 - E && b > 1 + E],
  ['fig13c_le', (a, b) => b > a + E],
  ['fig13d_pila', saw([-1, 1])],
  ['fig13e_ge_bez_ugla', (a, b) => b < a - E && s3(a, b)],
  ['fig13f_sigma3_celikom', s3],
];
CAT.forEach(([n, r]) => put(n, plane({ region: r, diag: true })));

// 14 пила с другими разрезами + схема на прямой
put('fig14a_pila_drugie_razrezy', plane({ region: saw([-2.5, 0.5, 2], ['≥', '≤', '≥', '≤']), diag: true, marks: [
  { t: 'txt', a: 0, b: -3.6, s: 'разрезы: −2,5; 0,5; 2', c: 'reg' },
] }));
(() => {
  const w = 400, y = 60, x1 = 20, x2 = 380;
  const XX = v => x1 + (v + 4) / 8 * (x2 - x1);
  const cuts = [-2.5, 0.5, 2], ends = [-4, ...cuts, 4], dirs = ['≥', '≤', '≥', '≤'];
  let h = open(w, 120);
  h += `<line class="nl-line" x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/>`;
  cuts.forEach(c => { h += `<line class="nl-line" x1="${XX(c)}" y1="${y - 12}" x2="${XX(c)}" y2="${y + 12}"/><text class="nl-sub" x="${XX(c)}" y="${y + 26}" text-anchor="middle">${f(c)}</text>`; });
  for (let i = 0; i < 4; i++) {
    const l = XX(ends[i]) + 6, r = XX(ends[i + 1]) - 6, m = (l + r) / 2;
    const rev = dirs[i] === '≥';
    h += `<line class="nl-piece" style="stroke:${rev ? '#b8790f' : '#2f6fb0'}" x1="${rev ? r : l}" y1="${y - 22}" x2="${rev ? l : r}" y2="${y - 22}" marker-end="url(#arr)"/>`;
    h += `<text class="nl-zone" x="${m}" y="${y - 32}" text-anchor="middle">${dirs[i]}</text>`;
  }
  h += `<text class="nl-sub" x="${w / 2}" y="${y + 50}" text-anchor="middle">куски идут слева направо; стрелка — порядок внутри куска</text>`;
  put('fig14b_pila_retsept', h + '</svg>');
})();

put('fig14c_pila_plohaya', plane({ region: saw([-2.5, 2.5], ['≤', '≥', '≤']), diag: true, marks: [
  { t: 'pt', a: 2, b: -2, c: 'bad', l: '(2; −2): 2 перед −2', anchor: 'end', dx: -9, dy: 20 },
  { t: 'txt', a: -3.9, b: 3.5, s: 'кусок (−2,5; 2,5] с ≥', c: 'bad', anchor: 'start' },
  { t: 'txt', a: -3.9, b: 3.05, s: 'залез в выброшенный угол', c: 'bad', anchor: 'start' },
] }));
// 15 вторая задача
put('fig15a_M_3_0_2', plane({ faint: s3, marks: ptsA([-3, 0, 2]) }));
put('fig15b_M_0_1', plane({ faint: s3, marks: ptsA([0, 1]) }));
put('fig15c_M_2_3', plane({ faint: s3, marks: ptsA([2, 3]) }));
put('fig15d_M_m3_2', plane({ faint: s3, marks: ptsA([-3, 2]) }));
// 16 выкидываем число вместе со строкой и столбцом
put('fig16_vykidyvaem_chislo', plane({ faint: s3, under: [
  { t: 'line', a1: 0, b1: -LIM, a2: 0, b2: LIM, c: 'g-kill' },
  { t: 'line', a1: -LIM, b1: 0, a2: LIM, b2: 0, c: 'g-kill' },
], marks: [...ptsA([-3, 0, 2], false),
  { t: 'txt', a: -0.3, b: 3.55, s: 'выкидываем 0:', c: 'bad', anchor: 'start' },
  { t: 'txt', a: -0.3, b: 3.1, s: 'уходят строка и столбец', c: 'bad', anchor: 'start' },
] }));

Object.entries(figs).forEach(([n, svg]) => fs.writeFileSync(path.join(OUT, n + '.svg'), svg + '\n', 'utf8'));
console.log(Object.keys(figs).length, 'figures');
