// Morph — Flubber + canvas. One idea: shape-to-shape continuity with no keyframe cheating.
// Three original marks (a star, a six-tooth gear, a rounded triangle) interpolated by Flubber;
// every intermediate frame is a real path, not a crossfade.
import { interpolate } from 'flubber';

const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const c = document.getElementById('stage');
const x = c.getContext('2d');
const dpr = Math.min(devicePixelRatio || 1, 2);

function poly(pts) {
  return pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join('') + 'Z';
}
function star(n, R, r) {
  const o = [];
  for (let i = 0; i < n * 2; i++) {
    const a = (i / (n * 2)) * Math.PI * 2 - Math.PI / 2, rr = i % 2 ? r : R;
    o.push([Math.cos(a) * rr, Math.sin(a) * rr]);
  }
  return poly(o);
}
function gear(teeth, R, r) {
  const o = [], n = teeth * 4;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2, k = i % 4, rr = k === 0 || k === 1 ? R : r;
    o.push([Math.cos(a) * rr, Math.sin(a) * rr]);
  }
  return poly(o);
}
function roundedTri(R) {
  const o = [];
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
    for (let j = -3; j <= 3; j++) { // soften each corner with a small arc
      const b = a + (j / 3) * 0.28, rr = R * (0.88 + 0.12 * Math.cos((j / 3) * Math.PI));
      o.push([Math.cos(b) * rr, Math.sin(b) * rr]);
    }
  }
  return poly(o);
}
const shapes = [
  { name: 'star', d: star(5, 1, 0.48) },
  { name: 'gear', d: gear(6, 1, 0.78) },
  { name: 'triangle', d: roundedTri(1) },
];
const interp = shapes.map((s, i) => interpolate(s.d, shapes[(i + 1) % 3].d, { maxSegmentLength: 0.05 }));

let from = 0, t = RM ? 0.5 : 0, playing = !RM;
const SPEED = 1 / 1800; // one morph per 1.8 s
let last = performance.now();

function draw() {
  const r = c.getBoundingClientRect();
  if (c.width !== r.width * dpr) { c.width = r.width * dpr; c.height = r.height * dpr; }
  x.setTransform(dpr, 0, 0, dpr, 0, 0);
  x.clearRect(0, 0, r.width, r.height);
  const R = Math.min(r.width, r.height) * 0.36;
  x.save();
  x.translate(r.width / 2, r.height / 2);
  x.scale(R, R);
  const path = new Path2D(interp[from](ease(t)));
  x.fillStyle = '#c8ff57';
  x.fill(path);
  x.restore();
  document.getElementById('readout').textContent = `${shapes[from].name} → ${shapes[(from + 1) % 3].name} · ${Math.round(t * 100)}%`;
  document.getElementById('scrub').value = Math.round(t * 1000);
}
function ease(v) { return v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2; }
function frame(now) {
  if (playing) {
    t += (now - last) * SPEED;
    if (t >= 1.25) { t = 0; from = (from + 1) % 3; } // 0.25 of hold at the end of each morph
    draw();
  }
  last = now;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
draw();

const play = document.getElementById('play');
function setPlaying(p) {
  playing = p;
  play.textContent = p ? 'Pause' : 'Play';
  play.setAttribute('aria-pressed', String(p));
}
play.addEventListener('click', () => setPlaying(!playing));
document.getElementById('next').addEventListener('click', () => { from = (from + 1) % 3; t = 0; draw(); });
document.getElementById('scrub').addEventListener('input', (e) => { setPlaying(false); t = Math.min(1, e.target.value / 1000); draw(); });
setPlaying(!RM);
addEventListener('resize', draw);
