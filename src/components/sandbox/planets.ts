export type Planet = {
  id: string;
  name: string;
  g: number;
};

/** Surface gravity in m/s². Luna y Plutón entran como anclas bajas del patio. */
export const PLANETS: Planet[] = [
  { id: "mercury", name: "Mercurio", g: 3.7 },
  { id: "venus", name: "Venus", g: 8.87 },
  { id: "earth", name: "Tierra", g: 9.81 },
  { id: "moon", name: "Luna", g: 1.62 },
  { id: "mars", name: "Marte", g: 3.71 },
  { id: "jupiter", name: "Júpiter", g: 24.79 },
  { id: "saturn", name: "Saturno", g: 10.44 },
  { id: "uranus", name: "Urano", g: 8.69 },
  { id: "neptune", name: "Neptuno", g: 11.15 },
  { id: "pluto", name: "Plutón", g: 0.62 },
];

export function planetById(id: string | null): Planet | null {
  if (!id) return null;
  return PLANETS.find((p) => p.id === id) ?? null;
}
