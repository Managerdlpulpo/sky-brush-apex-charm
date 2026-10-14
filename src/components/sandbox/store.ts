import { create } from "zustand";
import * as THREE from "three";
import { CATALOG, SHAPES, type Kind } from "./catalog";
import { PLANETS } from "./planets";

export type SimBody = {
  id: number;
  kind: Kind;
  position: [number, number, number];
  rotation: [number, number, number];
  scenery: boolean;
  tint: number;
  meta: { id: number; rest: number };
};

type State = {
  started: boolean;
  planetId: string | null;
  gravity: number;
  restitution: number;
  bodies: SimBody[];
  enter: () => void;
  setPlanet: (id: string) => void;
  setGravity: (g: number) => void;
  setRestitution: (r: number) => void;
  spawn: (kind: Kind) => void;
  spawnRandomShape: () => void;
  clear: () => void;
  remove: (ids: number[]) => void;
};

let seq = 1;
const _dir = new THREE.Vector3();
let activeCamera: THREE.Camera | null = null;
let burst = 0;
let burstAt = 0;

export function bindCamera(camera: THREE.Camera) {
  activeCamera = camera;
}

function makeBody(
  kind: Kind,
  x: number,
  z: number,
  y: number,
  rotation: [number, number, number],
  scenery: boolean,
  tint: number,
): SimBody {
  const id = seq++;
  const rest = CATALOG[kind].rest;
  return {
    id,
    kind,
    position: [x, y, z],
    rotation,
    scenery,
    tint,
    meta: { id, rest },
  };
}

const SCENERY: Array<{ kind: Kind; x: number; z: number; yaw: number; tint: number }> = [
  { kind: "car", x: -2.45, z: 6.2, yaw: 0.03, tint: 0 },
  { kind: "car", x: 2.4, z: -5.1, yaw: Math.PI - 0.04, tint: 1 },
  { kind: "van", x: -2.55, z: -14.2, yaw: 0.02, tint: 0 },
  { kind: "dumpster", x: -8.7, z: 7.6, yaw: 0.12, tint: 0 },
  { kind: "barrel", x: -8.15, z: -2.8, yaw: 0.6, tint: 1 },
  { kind: "crate", x: 8.15, z: -6.8, yaw: 0.4, tint: 2 },
  { kind: "cone", x: 3.85, z: -1.15, yaw: 0.2, tint: 0 },
  { kind: "cone", x: 4.0, z: 0.3, yaw: 0.9, tint: 0 },
  { kind: "cone", x: 3.75, z: 1.7, yaw: 0.15, tint: 0 },
];

function makeScenery(): SimBody[] {
  return SCENERY.map((item) =>
    makeBody(
      item.kind,
      item.x,
      item.z,
      CATALOG[item.kind].rest + 0.05,
      [0, item.yaw, 0],
      true,
      item.tint,
    ),
  );
}

function dropHeight(rest: number, gravity: number) {
  const now = performance.now();
  if (now - burstAt < 480) burst += 1;
  else burst = 0;
  burstAt = now;
  if (burst > 7) burst = 0;
  const base = gravity > 16 ? 3.2 : 5.8;
  return rest + base + burst * (rest * 2 + 0.4);
}

function dropPoint(gravity: number, rest: number) {
  let x = 0;
  let z = 0;
  const cam = activeCamera;
  if (cam) {
    cam.getWorldDirection(_dir);
    _dir.y = 0;
    if (_dir.lengthSq() < 1e-6) _dir.set(0, 0, -1);
    else _dir.normalize();
    x = cam.position.x + _dir.x * 7.4;
    z = cam.position.z + _dir.z * 7.4;
  }
  x = THREE.MathUtils.clamp(x + (Math.random() - 0.5) * 1.7, -7.2, 7.2);
  z = THREE.MathUtils.clamp(z + (Math.random() - 0.5) * 1.7, -11.5, 8.5);
  return { x, y: dropHeight(rest, gravity), z };
}

export const usePeso = create<State>((set, get) => ({
  started: false,
  planetId: "earth",
  gravity: 9.81,
  restitution: 0.25,
  bodies: makeScenery(),
  enter: () => set({ started: true }),
  setPlanet: (id) => {
    const planet = PLANETS.find((p) => p.id === id);
    if (!planet) return;
    set({ planetId: id, gravity: planet.g });
  },
  setGravity: (g) => {
    const match = PLANETS.find((p) => Math.abs(p.g - g) < 0.001);
    set({ gravity: g, planetId: match?.id ?? null });
  },
  setRestitution: (r) => set({ restitution: r }),
  spawn: (kind) => {
    const { gravity } = get();
    const def = CATALOG[kind];
    const point = dropPoint(gravity, def.rest);
    const tilt = def.group === "shape" ? (Math.random() - 0.5) * 0.35 : 0;
    const body = makeBody(
      kind,
      point.x,
      point.z,
      point.y,
      [tilt, Math.random() * Math.PI * 2, tilt * 0.45],
      false,
      seq % 5,
      );
    set((s) => {
      let bodies = s.bodies;
      const spawned = bodies.filter((b) => !b.scenery);
      if (spawned.length >= 36) {
        const dropId = spawned[0]?.id;
        bodies = bodies.filter((b) => b.id !== dropId);
      }
      return { bodies: [...bodies, body] };
    });
  },
  spawnRandomShape: () => {
    const kind = SHAPES[Math.floor(Math.random() * SHAPES.length)] ?? "cube";
    get().spawn(kind);
  },
  clear: () => set({ bodies: makeScenery() }),
  remove: (ids) => {
    if (ids.length === 0) return;
    const drop = new Set(ids);
    set((s) => ({ bodies: s.bodies.filter((b) => !drop.has(b.id)) }));
  },
}));
