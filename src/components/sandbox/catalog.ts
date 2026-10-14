export type Kind =
  | "car"
  | "van"
  | "fridge"
  | "washer"
  | "tv"
  | "sofa"
  | "cannon"
  | "barrel"
  | "crate"
  | "cone"
  | "chair"
  | "tire"
  | "microwave"
  | "dumpster"
  | "piano"
  | "ball"
  | "cube"
  | "sphere"
  | "cylinder"
  | "capsule"
  | "conePrim";

export type ColliderSpec =
  | { shape: "cuboid"; args: [number, number, number] }
  | { shape: "ball"; args: [number] }
  | { shape: "cylinder"; args: [number, number]; rotation?: [number, number, number] }
  | { shape: "capsule"; args: [number, number] }
  | { shape: "cone"; args: [number, number] };

export type ItemDef = {
  label: string;
  group: "daily" | "shape";
  mass: number;
  friction: number;
  rest: number;
  collider: ColliderSpec;
};

export const CATALOG: Record<Kind, ItemDef> = {
  car: { label: "Coche", group: "daily", mass: 360, friction: 0.72, rest: 0.58, collider: { shape: "cuboid", args: [0.86, 0.58, 1.95] } },
  van: { label: "Furgoneta", group: "daily", mass: 480, friction: 0.74, rest: 0.9, collider: { shape: "cuboid", args: [0.96, 0.9, 2.2] } },
  fridge: { label: "Nevera", group: "daily", mass: 52, friction: 0.7, rest: 0.9, collider: { shape: "cuboid", args: [0.36, 0.9, 0.34] } },
  washer: { label: "Lavadora", group: "daily", mass: 42, friction: 0.68, rest: 0.46, collider: { shape: "cuboid", args: [0.36, 0.46, 0.38] } },
  tv: { label: "Televisor", group: "daily", mass: 12, friction: 0.55, rest: 0.48, collider: { shape: "cuboid", args: [0.68, 0.48, 0.1] } },
  sofa: { label: "Sofá", group: "daily", mass: 36, friction: 0.8, rest: 0.42, collider: { shape: "cuboid", args: [1.05, 0.42, 0.46] } },
  cannon: { label: "Cañón", group: "daily", mass: 210, friction: 0.62, rest: 0.42, collider: { shape: "cuboid", args: [0.5, 0.42, 1.28] } },
  barrel: { label: "Barril", group: "daily", mass: 24, friction: 0.6, rest: 0.46, collider: { shape: "cylinder", args: [0.46, 0.32] } },
  crate: { label: "Caja", group: "daily", mass: 16, friction: 0.78, rest: 0.38, collider: { shape: "cuboid", args: [0.38, 0.38, 0.38] } },
  cone: { label: "Cono vial", group: "daily", mass: 6, friction: 0.65, rest: 0.42, collider: { shape: "cone", args: [0.42, 0.22] } },
  chair: { label: "Silla", group: "daily", mass: 10, friction: 0.62, rest: 0.46, collider: { shape: "cuboid", args: [0.28, 0.46, 0.28] } },
  tire: {
    label: "Rueda",
    group: "daily",
    mass: 12,
    friction: 0.5,
    rest: 0.34,
    collider: { shape: "cylinder", args: [0.11, 0.34], rotation: [0, 0, Math.PI / 2] },
  },
  microwave: { label: "Microondas", group: "daily", mass: 9, friction: 0.58, rest: 0.18, collider: { shape: "cuboid", args: [0.28, 0.18, 0.2] } },
  dumpster: { label: "Contenedor", group: "daily", mass: 90, friction: 0.8, rest: 0.62, collider: { shape: "cuboid", args: [0.72, 0.62, 0.46] } },
  piano: { label: "Piano", group: "daily", mass: 160, friction: 0.7, rest: 0.52, collider: { shape: "cuboid", args: [0.74, 0.52, 0.38] } },
  ball: { label: "Pelota", group: "daily", mass: 6, friction: 0.4, rest: 0.26, collider: { shape: "ball", args: [0.26] } },
  cube: { label: "Cubo", group: "shape", mass: 28, friction: 0.7, rest: 0.4, collider: { shape: "cuboid", args: [0.4, 0.4, 0.4] } },
  sphere: { label: "Esfera", group: "shape", mass: 26, friction: 0.45, rest: 0.4, collider: { shape: "ball", args: [0.4] } },
  cylinder: { label: "Cilindro", group: "shape", mass: 24, friction: 0.6, rest: 0.5, collider: { shape: "cylinder", args: [0.5, 0.32] } },
  capsule: { label: "Cápsula", group: "shape", mass: 22, friction: 0.55, rest: 0.62, collider: { shape: "capsule", args: [0.34, 0.28] } },
  conePrim: { label: "Cono", group: "shape", mass: 20, friction: 0.55, rest: 0.55, collider: { shape: "cone", args: [0.55, 0.4] } },
};

export const DAILY: Kind[] = [
  "car",
  "van",
  "fridge",
  "washer",
  "tv",
  "sofa",
  "cannon",
  "barrel",
  "crate",
  "cone",
  "chair",
  "tire",
  "microwave",
  "dumpster",
  "piano",
  "ball",
];

export const SHAPES: Kind[] = ["cube", "sphere", "cylinder", "capsule", "conePrim"];
