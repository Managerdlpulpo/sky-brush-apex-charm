import * as THREE from "three";

const STYLES = [
  { wall: "#d7d2c8", glass: "#8ea4b2", lit: "#f0e2c4" },
  { wall: "#b7b1a6", glass: "#7d96a4", lit: "#f3e6c8" },
  { wall: "#8d4e3f", glass: "#d9c8b6", lit: "#f4e2bc" },
  { wall: "#6c7278", glass: "#c5d2da", lit: "#f3ead4" },
  { wall: "#cfc6b8", glass: "#93a7ae", lit: "#f6e7c8" },
  { wall: "#a39e96", glass: "#8798a1", lit: "#f0deb8" },
];

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const cache = new Map<number, THREE.CanvasTexture>();

export function facadeTexture(style: number): THREE.CanvasTexture {
  const cached = cache.get(style);
  if (cached) return cached;
  const s = STYLES[style % STYLES.length] ?? STYLES[0];
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 160;
  const g = canvas.getContext("2d");
  if (!g) {
    const fallback = new THREE.CanvasTexture(canvas);
    cache.set(style, fallback);
    return fallback;
  }
  g.fillStyle = s.wall;
  g.fillRect(0, 0, 128, 160);
  g.fillStyle = "rgba(28, 27, 25, 0.08)";
  g.fillRect(0, 78, 128, 2);
  const rand = mulberry32(style * 97 + 11);
  for (let row = 0; row < 2; row += 1) {
    for (let col = 0; col < 2; col += 1) {
      const x = 16 + col * 54;
      const y = 12 + row * 78;
      const lit = rand() > 0.84;
      g.fillStyle = lit ? s.lit : s.glass;
      g.fillRect(x, y, 38, 50);
      g.fillStyle = "rgba(255,255,255,0.2)";
      g.fillRect(x, y, 38, 3);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  cache.set(style, tex);
  return tex;
}

export const ROOF = ["#8a847c", "#6a6660", "#5c4038", "#4a4e52", "#7a736a", "#5e5a55"];
export const SHOP = ["#2e3338", "#3a342e", "#4a3028", "#2c3238", "#3a3834", "#34322e"];
