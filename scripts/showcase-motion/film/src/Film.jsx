// Launch film for /showcase — Motion & Film. Rendered from these components by Remotion, encoded
// by FFmpeg (scripts/showcase-motion/film/encode.sh). Same source, two compositions:
// 16:9 launch (24 s) and 9:16 vertical cut (15 s). Everything on screen is drawn in code.
import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, interpolate, spring, Easing } from 'remotion';

const ACC = '#c8ff57', INK = '#e2e4ea', MUTED = '#9d9dab', BG = '#0a0b0f';
const serif = { fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: INK, letterSpacing: '-0.01em' };
const mono = { fontFamily: '"JetBrains Mono", monospace', color: MUTED, textTransform: 'uppercase', letterSpacing: '0.16em' };
const sans = { fontFamily: 'Inter, sans-serif', color: MUTED };

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const fade = (f, s, e) => interpolate(f, [s, e], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
const rise = (f, fps, delay = 0) => spring({ frame: f - delay, fps, config: { damping: 200, stiffness: 120 } });

function Title({ vertical }) {
  const f = useCurrentFrame(), { fps, width } = useVideoConfig();
  const a = rise(f, fps, 4), b = rise(f, fps, 16);
  const out = interpolate(f, [70, 84], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const size = vertical ? width * 0.13 : width * 0.075;
  return (
    <AbsoluteFill style={{ justifyContent: 'center', padding: vertical ? '0 8%' : '0 10%', opacity: out }}>
      <div style={{ ...mono, fontSize: vertical ? 26 : 22, color: ACC, opacity: fade(f, 0, 10) }}>Showcase</div>
      <div style={{ ...serif, fontSize: size, lineHeight: 1.02, marginTop: 24 }}>
        <span style={{ display: 'inline-block', transform: `translateY(${(1 - a) * 40}px)`, opacity: a }}>Built,</span>
        {vertical ? <br /> : ' '}
        <span style={{ display: 'inline-block', transform: `translateY(${(1 - b) * 40}px)`, opacity: b, fontStyle: 'italic', fontWeight: 300, color: ACC }}>not described.</span>
      </div>
    </AbsoluteFill>
  );
}

// Four code-drawn glyphs: easing race, morph, drop, gradient — the four live cards.
function Glyphs({ vertical }) {
  const f = useCurrentFrame(), { fps, width, height } = useVideoConfig();
  const inn = rise(f, fps, 0), out = interpolate(f, [120, 136], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const cell = vertical ? { w: width * 0.84, h: height * 0.17 } : { w: width * 0.38, h: height * 0.3 };
  const t = clamp((f - 10) / 60);
  const eases = [Easing.linear, Easing.out(Easing.quad), Easing.inOut(Easing.quad), Easing.out(Easing.back(2))];
  const items = [
    ['Timeline Lab', (
      <div style={{ position: 'relative', width: '100%', height: '100%', padding: 18 }}>
        {eases.map((e, i) => (
          <div key={i} style={{ position: 'absolute', left: 18, right: 18, top: 18 + i * ((cell.h - 36) / 3.4), height: 1, background: 'rgba(255,255,255,.12)' }}>
            <i style={{ position: 'absolute', top: -7, left: `${clamp(e(t)) * 100}%`, width: 14, height: 14, marginLeft: -7, borderRadius: 7, background: i === 1 ? ACC : INK }} />
          </div>
        ))}
      </div>
    )],
    ['Morph', (() => {
      const n = 10, R = Math.min(cell.w, cell.h) * 0.38, q = interpolate(Math.sin(f / 14), [-1, 1], [0.46, 1]);
      const pts = Array.from({ length: n }, (_, i) => { const a = (i / n) * Math.PI * 2 - Math.PI / 2, r = i % 2 ? R * q : R; return `${Math.cos(a) * r},${Math.sin(a) * r}`; }).join(' ');
      return <svg width="100%" height="100%" viewBox={`${-cell.w / 2} ${-cell.h / 2} ${cell.w} ${cell.h}`}><polygon points={pts} fill={ACC} /></svg>;
    })()],
    ['Physics Drop', (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const s = spring({ frame: f - 6 - i * 5, fps, config: { damping: 9, stiffness: 90, mass: 0.8 } });
          const sz = 22 + (i % 3) * 10;
          return <div key={i} style={{ position: 'absolute', left: 24 + i * ((cell.w - 60) / 6), bottom: 44 + (1 - s) * (cell.h - 70), width: sz, height: sz, background: i % 3 ? INK : ACC, transform: `rotate(${(1 - s) * 90}deg)` }} />;
        })}
        <div style={{ position: 'absolute', left: 18, right: 18, bottom: 44, height: 1, background: 'rgba(255,255,255,.2)' }} />
      </div>
    )],
    ['Shader Loop', (
      <div style={{ width: '100%', height: '100%', background: `radial-gradient(circle at ${50 + Math.sin(f / 20) * 30}% ${50 + Math.cos(f / 17) * 30}%, ${ACC} 0%, #2a9d8f 45%, ${BG} 100%)` }} />
    )],
  ];
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', opacity: inn * out }}>
      <div style={{ display: 'grid', gridTemplateColumns: vertical ? '1fr' : '1fr 1fr', gap: vertical ? 22 : 28 }}>
        {items.map(([name, body], i) => {
          const s = rise(f, fps, i * 5);
          return (
            <div key={name} style={{ width: cell.w, height: cell.h, background: '#111116', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, overflow: 'hidden', position: 'relative', transform: `translateY(${(1 - s) * 30}px)`, opacity: s }}>
              {body}
              <div style={{ ...mono, position: 'absolute', left: 16, bottom: 12, fontSize: vertical ? 18 : 15 }}>{name} · <span style={{ color: ACC }}>live</span></div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function Categories({ vertical }) {
  const f = useCurrentFrame(), { fps, width } = useVideoConfig();
  const out = interpolate(f, [130, 146], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const rows = [['01', 'Design Craft'], ['02', 'Motion & Film'], ['03', 'Engineering']];
  return (
    <AbsoluteFill style={{ justifyContent: 'center', padding: vertical ? '0 8%' : '0 10%', opacity: out }}>
      <div style={{ ...mono, fontSize: vertical ? 24 : 20, color: ACC, opacity: fade(f, 0, 10) }}>Three categories</div>
      {rows.map(([n, l], i) => {
        const s = rise(f, fps, 8 + i * 10);
        return (
          <div key={n} style={{ display: 'flex', alignItems: 'baseline', gap: 28, marginTop: vertical ? 30 : 18, transform: `translateX(${(1 - s) * -40}px)`, opacity: s }}>
            <span style={{ ...mono, fontSize: vertical ? 24 : 22, color: ACC }}>{n}</span>
            <span style={{ ...serif, fontSize: vertical ? width * 0.1 : width * 0.055, lineHeight: 1 }}>{l}</span>
          </div>
        );
      })}
    </AbsoluteFill>
  );
}

function Receipt({ vertical }) {
  const f = useCurrentFrame(), { fps, width } = useVideoConfig();
  const out = interpolate(f, [150, 166], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const lines = [['this film', 'Remotion + FFmpeg'], ['timing', 'Anime.js'], ['morph', 'Flubber'], ['physics', 'Three.js + cannon-es'], ['shader', 'GLSL, raw WebGL'], ['claims', 'none we can’t reproduce']];
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', opacity: out }}>
      <div style={{ width: vertical ? '84%' : width * 0.46, background: '#0d0e13', border: '1px dashed rgba(255,255,255,.18)', borderRadius: 18, padding: vertical ? 36 : 40 }}>
        <div style={{ ...mono, fontSize: vertical ? 22 : 18, color: INK, borderBottom: '1px dashed rgba(255,255,255,.18)', paddingBottom: 14, display: 'flex', justifyContent: 'space-between' }}><span>Made with</span><span style={{ color: ACC }}>receipt</span></div>
        {lines.map(([k, v], i) => {
          const s = rise(f, fps, 6 + i * 7);
          return (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, fontFamily: '"JetBrains Mono", monospace', fontSize: vertical ? 26 : 24, padding: '12px 0', opacity: s, transform: `translateY(${(1 - s) * 12}px)` }}>
              <span style={{ color: MUTED }}>{k}</span><span style={{ color: INK }}>{v}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function End({ vertical }) {
  const f = useCurrentFrame(), { fps, width } = useVideoConfig();
  const s = rise(f, fps, 2);
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 8%' }}>
      <div style={{ ...serif, fontSize: vertical ? width * 0.1 : width * 0.05, lineHeight: 1.05, opacity: s, transform: `translateY(${(1 - s) * 24}px)` }}>Nothing on the page is a screenshot<span style={{ color: ACC }}>.</span></div>
      <div style={{ ...sans, fontSize: vertical ? 30 : 28, marginTop: 28, opacity: fade(f, 14, 30) }}>Every card runs. Every tool named touched the work.</div>
      <div style={{ ...mono, fontSize: vertical ? 20 : 18, marginTop: 40, opacity: fade(f, 24, 40) }}>franklin · showcase · motion &amp; film</div>
    </AbsoluteFill>
  );
}

export const Film = ({ vertical }) => {
  const { durationInFrames } = useVideoConfig();
  const f = useCurrentFrame();
  // 24 s: title 0–3, glyphs 3–8, categories 8–13, receipt 13–19, end 19–24. 15 s: same beats, shorter.
  const beats = vertical ? [0, 70, 160, 250, 340] : [0, 90, 240, 390, 570];
  const fadeOut = interpolate(f, [durationInFrames - 18, durationInFrames - 1], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: BG, opacity: fadeOut }}>
      <Sequence from={beats[0]} durationInFrames={beats[1] + 14}><Title vertical={vertical} /></Sequence>
      <Sequence from={beats[1]} durationInFrames={beats[2] - beats[1] + 14}><Glyphs vertical={vertical} /></Sequence>
      <Sequence from={beats[2]} durationInFrames={beats[3] - beats[2] + 14}><Categories vertical={vertical} /></Sequence>
      <Sequence from={beats[3]} durationInFrames={beats[4] - beats[3] + 14}><Receipt vertical={vertical} /></Sequence>
      <Sequence from={beats[4]}><End vertical={vertical} /></Sequence>
      <div style={{ position: 'absolute', left: 0, bottom: 0, height: 4, width: `${(f / durationInFrames) * 100}%`, background: ACC, opacity: 0.8 }} />
    </AbsoluteFill>
  );
};
