// Shader Loop — raw WebGL, twigl-style. One idea: code as the material.
// The fragment shader in the editor is the picture. Edit it, apply (button or Ctrl/Cmd+Enter),
// and the loop recompiles. No video file anywhere. Under reduced-motion `time` is frozen.
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const c = document.getElementById('stage');
const gl = c.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
const editor = document.getElementById('src');
const status = document.getElementById('status');

const VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const HEADER = 'precision mediump float;uniform vec2 resolution;uniform float time;\n';

const buf = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buf);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

let prog = null, uRes, uTime;
function compile(src) {
  const mk = (type, s) => { const sh = gl.createShader(type); gl.shaderSource(sh, s); gl.compileShader(sh); if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh)); return sh; };
  const p = gl.createProgram();
  gl.attachShader(p, mk(gl.VERTEX_SHADER, VERT));
  gl.attachShader(p, mk(gl.FRAGMENT_SHADER, HEADER + src));
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
  return p;
}
function apply() {
  try {
    const p = compile(editor.value);
    if (prog) gl.deleteProgram(prog);
    prog = p;
    gl.useProgram(prog);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    uRes = gl.getUniformLocation(prog, 'resolution');
    uTime = gl.getUniformLocation(prog, 'time');
    status.textContent = 'compiled · ' + editor.value.split('\n').length + ' lines';
    status.className = 'ok';
    if (RM) draw(1.3);
  } catch (e) {
    status.textContent = String(e.message || e).replace(/^ERROR: /, '').trim();
    status.className = 'err';
  }
}
function draw(t) {
  const r = c.getBoundingClientRect();
  const dpr = Math.min(devicePixelRatio || 1, 1.25);
  const w = Math.max(1, Math.round(r.width * dpr)), h = Math.max(1, Math.round(r.height * dpr));
  if (c.width !== w || c.height !== h) { c.width = w; c.height = h; gl.viewport(0, 0, w, h); }
  if (!prog) return;
  gl.uniform2f(uRes, w, h);
  gl.uniform1f(uTime, t);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
const t0 = performance.now();
function loop(now) { draw((now - t0) / 1000); requestAnimationFrame(loop); }

document.getElementById('apply').addEventListener('click', apply);
editor.addEventListener('keydown', (e) => { if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); apply(); } });
document.getElementById('reset').addEventListener('click', () => { editor.value = editor.defaultValue; apply(); });
addEventListener('resize', () => RM && draw(1.3));

apply();
if (!RM) requestAnimationFrame(loop);
