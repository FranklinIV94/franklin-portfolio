// Physics Drop — Three.js + cannon-es. One idea: real simulation, real collisions.
// Twelve boxes fall on a floor and settle however the solver says they settle. Drag or use
// arrow keys to orbit; Space / the button drops them again. Under reduced-motion the sim is
// stepped to rest off-screen and a single settled frame is drawn.
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, PlaneGeometry, MeshStandardMaterial, Mesh, DirectionalLight, HemisphereLight, Color, PCFSoftShadowMap, SRGBColorSpace } from 'three';
import { World, Body, Box, Plane, Vec3, SAPBroadphase } from 'cannon-es';

const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const host = document.getElementById('stage');
const renderer = new WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.outputColorSpace = SRGBColorSpace;
host.appendChild(renderer.domElement);

const scene = new Scene();
scene.background = new Color('#0d0e13');
const camera = new PerspectiveCamera(38, 1, 0.1, 100);

const sun = new DirectionalLight('#ffffff', 2.4);
sun.position.set(5, 9, 4);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = sun.shadow.camera.bottom = -10;
sun.shadow.camera.right = sun.shadow.camera.top = 10;
scene.add(sun, new HemisphereLight('#3a3f55', '#0a0b0f', 1.2));

const floorMesh = new Mesh(new PlaneGeometry(40, 40), new MeshStandardMaterial({ color: '#15161c', roughness: 0.95 }));
floorMesh.rotation.x = -Math.PI / 2;
floorMesh.receiveShadow = true;
scene.add(floorMesh);

const world = new World({ gravity: new Vec3(0, -9.82, 0) });
world.broadphase = new SAPBroadphase(world);
world.allowSleep = true;
const floor = new Body({ mass: 0, shape: new Plane() });
floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(floor);

const N = 12, boxes = [];
const geo = new BoxGeometry(1, 1, 1);
const matA = new MeshStandardMaterial({ color: '#e2e4ea', roughness: 0.55, metalness: 0.05 });
const matB = new MeshStandardMaterial({ color: '#c8ff57', roughness: 0.5, metalness: 0.05 });
for (let i = 0; i < N; i++) {
  const s = 0.5 + ((i * 7) % 5) * 0.12;
  const mesh = new Mesh(geo, i % 3 === 0 ? matB : matA);
  mesh.scale.setScalar(s);
  mesh.castShadow = mesh.receiveShadow = true;
  scene.add(mesh);
  const body = new Body({ mass: s * s * s * 2, shape: new Box(new Vec3(s / 2, s / 2, s / 2)), sleepSpeedLimit: 0.15, sleepTimeLimit: 0.6 });
  world.addBody(body);
  boxes.push({ mesh, body, s });
}

let seed = 1;
function rand() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
function drop() {
  seed = 1 + Math.floor(Math.random() * 1e6);
  boxes.forEach(({ body }, i) => {
    body.position.set((rand() - 0.5) * 3, 4 + i * 0.9, (rand() - 0.5) * 3);
    body.velocity.set(0, 0, 0);
    body.angularVelocity.set((rand() - 0.5) * 4, (rand() - 0.5) * 4, (rand() - 0.5) * 4);
    body.quaternion.setFromEuler(rand() * 3, rand() * 3, rand() * 3);
    body.wakeUp();
  });
  dropped = performance.now();
}

// orbit, pointer or keyboard
let theta = 0.7, phi = 0.95, radius = 11, dragging = false, px = 0, py = 0;
function placeCamera() {
  camera.position.set(Math.sin(theta) * Math.cos(phi) * radius, Math.sin(phi) * radius, Math.cos(theta) * Math.cos(phi) * radius);
  camera.lookAt(0, 0.6, 0);
}
host.addEventListener('pointerdown', (e) => { dragging = true; px = e.clientX; py = e.clientY; host.setPointerCapture(e.pointerId); });
host.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  theta -= (e.clientX - px) * 0.008; phi = Math.max(0.2, Math.min(1.4, phi + (e.clientY - py) * 0.006));
  px = e.clientX; py = e.clientY; placeCamera(); if (RM) render();
});
host.addEventListener('pointerup', () => { dragging = false; });
host.addEventListener('keydown', (e) => {
  const k = e.key;
  if (k === 'ArrowLeft') theta += 0.12; else if (k === 'ArrowRight') theta -= 0.12;
  else if (k === 'ArrowUp') phi = Math.min(1.4, phi + 0.08); else if (k === 'ArrowDown') phi = Math.max(0.2, phi - 0.08);
  else if (k === ' ' || k === 'Enter') { e.preventDefault(); drop(); if (RM) settleAndRender(); return; }
  else return;
  e.preventDefault(); placeCamera(); if (RM) render();
});
document.getElementById('drop').addEventListener('click', () => { drop(); if (RM) settleAndRender(); });

function resize() {
  const r = host.getBoundingClientRect();
  renderer.setSize(r.width, r.height, false);
  camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
  if (RM) render();
}
addEventListener('resize', resize);

const readout = document.getElementById('readout');
let dropped = 0, last = performance.now();
function sync() { boxes.forEach(({ mesh, body }) => { mesh.position.copy(body.position); mesh.quaternion.copy(body.quaternion); }); }
function render() { renderer.render(scene, camera); }
function settled() { return boxes.filter(({ body }) => body.sleepState === Body.SLEEPING).length; }
function settleAndRender() { for (let i = 0; i < 600; i++) world.step(1 / 60); sync(); render(); readout.textContent = `bodies ${N} · settled ${settled()} · reduced motion: showing the rest state`; }

function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  world.step(1 / 60, dt, 3);
  sync(); render();
  readout.textContent = `bodies ${N} · settled ${settled()} · ${((now - dropped) / 1000).toFixed(1)} s`;
  requestAnimationFrame(loop);
}

placeCamera(); resize(); drop();
if (RM) settleAndRender(); else requestAnimationFrame(loop);
