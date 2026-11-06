// Timeline Lab — Anime.js v4. One idea: timing and easing are designed, not defaulted.
// Four tracks run the same 1.6 s move on four easings; a scrubber lets you compare any instant.
import { createTimeline, engine } from 'animejs';

const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const tracks = [
  ['linear', 'linear'],
  ['outQuart', 'out(4)'],
  ['inOutQuad', 'inOut(2)'],
  ['outElastic', 'outElastic(1, .6)'],
];
const lane = document.getElementById('lanes');
tracks.forEach(([name, ease]) => {
  const row = document.createElement('div');
  row.className = 'lane';
  row.innerHTML = `<span class="name">${name}</span><div class="rail"><i class="dot" data-ease="${ease}"></i></div>`;
  lane.appendChild(row);
});

const DUR = 1600;
const tl = createTimeline({ loop: true, loopDelay: 700, alternate: true, autoplay: !RM });
document.querySelectorAll('.dot').forEach((d) => {
  tl.add(d, { translateX: () => d.parentElement.clientWidth - d.clientWidth, duration: DUR, ease: d.dataset.ease }, 0);
});

const scrub = document.getElementById('scrub');
const play = document.getElementById('play');
const readout = document.getElementById('readout');
let paused = RM;
if (RM) tl.seek(DUR * 0.72);

function setPlaying(p) {
  paused = !p;
  p ? tl.play() : tl.pause();
  play.textContent = p ? 'Pause' : 'Play';
  play.setAttribute('aria-pressed', String(p));
}
play.addEventListener('click', () => setPlaying(paused));
scrub.addEventListener('input', () => {
  if (!paused) setPlaying(false);
  tl.seek((scrub.value / 1000) * DUR);
});
setPlaying(!RM);

// keep the scrubber and readout honest with the live clock
function tick() {
  const t = Math.min(tl.currentTime, DUR);
  if (!paused) scrub.value = Math.round((t / DUR) * 1000);
  readout.textContent = `${(t / 1000).toFixed(2)} s / ${(DUR / 1000).toFixed(1)} s`;
  requestAnimationFrame(tick);
}
tick();

addEventListener('resize', () => tl.refresh());
