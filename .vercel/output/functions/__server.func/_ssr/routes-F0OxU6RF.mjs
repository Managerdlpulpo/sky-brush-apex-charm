import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as Vector2, S as ShaderMaterial, _ as Plane, b as RepeatWrapping, i as useThree, l as CanvasTexture, m as MathUtils, n as Canvas, p as GLSL3, r as useFrame, t as OrbitControls, u as Color, w as Vector3, x as SRGBColorSpace, y as Raycaster } from "../_libs/@react-three/drei+[...].mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as CylinderCollider, c as useAfterPhysicsStep, i as CuboidCollider, l as useBeforePhysicsStep, n as CapsuleCollider, o as Physics, r as ConeCollider, s as RigidBody, t as BallCollider, u as useRapier } from "../_libs/@react-three/rapier+[...].mjs";
import { s as zA } from "../_libs/dimforge__rapier3d-compat.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-F0OxU6RF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATALOG = {
	car: {
		label: "Coche",
		group: "daily",
		mass: 360,
		friction: .72,
		rest: .58,
		collider: {
			shape: "cuboid",
			args: [
				.86,
				.58,
				1.95
			]
		}
	},
	van: {
		label: "Furgoneta",
		group: "daily",
		mass: 480,
		friction: .74,
		rest: .9,
		collider: {
			shape: "cuboid",
			args: [
				.96,
				.9,
				2.2
			]
		}
	},
	fridge: {
		label: "Nevera",
		group: "daily",
		mass: 52,
		friction: .7,
		rest: .9,
		collider: {
			shape: "cuboid",
			args: [
				.36,
				.9,
				.34
			]
		}
	},
	washer: {
		label: "Lavadora",
		group: "daily",
		mass: 42,
		friction: .68,
		rest: .46,
		collider: {
			shape: "cuboid",
			args: [
				.36,
				.46,
				.38
			]
		}
	},
	tv: {
		label: "Televisor",
		group: "daily",
		mass: 12,
		friction: .55,
		rest: .48,
		collider: {
			shape: "cuboid",
			args: [
				.68,
				.48,
				.1
			]
		}
	},
	sofa: {
		label: "Sofá",
		group: "daily",
		mass: 36,
		friction: .8,
		rest: .42,
		collider: {
			shape: "cuboid",
			args: [
				1.05,
				.42,
				.46
			]
		}
	},
	cannon: {
		label: "Cañón",
		group: "daily",
		mass: 210,
		friction: .62,
		rest: .42,
		collider: {
			shape: "cuboid",
			args: [
				.5,
				.42,
				1.28
			]
		}
	},
	barrel: {
		label: "Barril",
		group: "daily",
		mass: 24,
		friction: .6,
		rest: .46,
		collider: {
			shape: "cylinder",
			args: [.46, .32]
		}
	},
	crate: {
		label: "Caja",
		group: "daily",
		mass: 16,
		friction: .78,
		rest: .38,
		collider: {
			shape: "cuboid",
			args: [
				.38,
				.38,
				.38
			]
		}
	},
	cone: {
		label: "Cono vial",
		group: "daily",
		mass: 6,
		friction: .65,
		rest: .42,
		collider: {
			shape: "cone",
			args: [.42, .22]
		}
	},
	chair: {
		label: "Silla",
		group: "daily",
		mass: 10,
		friction: .62,
		rest: .46,
		collider: {
			shape: "cuboid",
			args: [
				.28,
				.46,
				.28
			]
		}
	},
	tire: {
		label: "Rueda",
		group: "daily",
		mass: 12,
		friction: .5,
		rest: .34,
		collider: {
			shape: "cylinder",
			args: [.11, .34],
			rotation: [
				0,
				0,
				Math.PI / 2
			]
		}
	},
	microwave: {
		label: "Microondas",
		group: "daily",
		mass: 9,
		friction: .58,
		rest: .18,
		collider: {
			shape: "cuboid",
			args: [
				.28,
				.18,
				.2
			]
		}
	},
	dumpster: {
		label: "Contenedor",
		group: "daily",
		mass: 90,
		friction: .8,
		rest: .62,
		collider: {
			shape: "cuboid",
			args: [
				.72,
				.62,
				.46
			]
		}
	},
	piano: {
		label: "Piano",
		group: "daily",
		mass: 160,
		friction: .7,
		rest: .52,
		collider: {
			shape: "cuboid",
			args: [
				.74,
				.52,
				.38
			]
		}
	},
	ball: {
		label: "Pelota",
		group: "daily",
		mass: 6,
		friction: .4,
		rest: .26,
		collider: {
			shape: "ball",
			args: [.26]
		}
	},
	cube: {
		label: "Cubo",
		group: "shape",
		mass: 28,
		friction: .7,
		rest: .4,
		collider: {
			shape: "cuboid",
			args: [
				.4,
				.4,
				.4
			]
		}
	},
	sphere: {
		label: "Esfera",
		group: "shape",
		mass: 26,
		friction: .45,
		rest: .4,
		collider: {
			shape: "ball",
			args: [.4]
		}
	},
	cylinder: {
		label: "Cilindro",
		group: "shape",
		mass: 24,
		friction: .6,
		rest: .5,
		collider: {
			shape: "cylinder",
			args: [.5, .32]
		}
	},
	capsule: {
		label: "Cápsula",
		group: "shape",
		mass: 22,
		friction: .55,
		rest: .62,
		collider: {
			shape: "capsule",
			args: [.34, .28]
		}
	},
	conePrim: {
		label: "Cono",
		group: "shape",
		mass: 20,
		friction: .55,
		rest: .55,
		collider: {
			shape: "cone",
			args: [.55, .4]
		}
	}
};
var DAILY = [
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
	"ball"
];
var SHAPES = [
	"cube",
	"sphere",
	"cylinder",
	"capsule",
	"conePrim"
];
/** Surface gravity in m/s². Luna y Plutón entran como anclas bajas del patio. */
var PLANETS = [
	{
		id: "mercury",
		name: "Mercurio",
		g: 3.7
	},
	{
		id: "venus",
		name: "Venus",
		g: 8.87
	},
	{
		id: "earth",
		name: "Tierra",
		g: 9.81
	},
	{
		id: "moon",
		name: "Luna",
		g: 1.62
	},
	{
		id: "mars",
		name: "Marte",
		g: 3.71
	},
	{
		id: "jupiter",
		name: "Júpiter",
		g: 24.79
	},
	{
		id: "saturn",
		name: "Saturno",
		g: 10.44
	},
	{
		id: "uranus",
		name: "Urano",
		g: 8.69
	},
	{
		id: "neptune",
		name: "Neptuno",
		g: 11.15
	},
	{
		id: "pluto",
		name: "Plutón",
		g: .62
	}
];
function planetById(id) {
	if (!id) return null;
	return PLANETS.find((p) => p.id === id) ?? null;
}
var seq = 1;
var _dir = new Vector3();
var activeCamera = null;
var burst = 0;
var burstAt = 0;
function bindCamera(camera) {
	activeCamera = camera;
}
function makeBody(kind, x, z, y, rotation, scenery, tint) {
	const id = seq++;
	const rest = CATALOG[kind].rest;
	return {
		id,
		kind,
		position: [
			x,
			y,
			z
		],
		rotation,
		scenery,
		tint,
		meta: {
			id,
			rest
		}
	};
}
var SCENERY = [
	{
		kind: "car",
		x: -2.45,
		z: 6.2,
		yaw: .03,
		tint: 0
	},
	{
		kind: "car",
		x: 2.4,
		z: -5.1,
		yaw: Math.PI - .04,
		tint: 1
	},
	{
		kind: "van",
		x: -2.55,
		z: -14.2,
		yaw: .02,
		tint: 0
	},
	{
		kind: "dumpster",
		x: -8.7,
		z: 7.6,
		yaw: .12,
		tint: 0
	},
	{
		kind: "barrel",
		x: -8.15,
		z: -2.8,
		yaw: .6,
		tint: 1
	},
	{
		kind: "crate",
		x: 8.15,
		z: -6.8,
		yaw: .4,
		tint: 2
	},
	{
		kind: "cone",
		x: 3.85,
		z: -1.15,
		yaw: .2,
		tint: 0
	},
	{
		kind: "cone",
		x: 4,
		z: .3,
		yaw: .9,
		tint: 0
	},
	{
		kind: "cone",
		x: 3.75,
		z: 1.7,
		yaw: .15,
		tint: 0
	}
];
function makeScenery() {
	return SCENERY.map((item) => makeBody(item.kind, item.x, item.z, CATALOG[item.kind].rest + .05, [
		0,
		item.yaw,
		0
	], true, item.tint));
}
function dropHeight(rest, gravity) {
	const now = performance.now();
	if (now - burstAt < 480) burst += 1;
	else burst = 0;
	burstAt = now;
	if (burst > 7) burst = 0;
	return rest + (gravity > 16 ? 3.2 : 5.8) + burst * (rest * 2 + .4);
}
function dropPoint(gravity, rest) {
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
	x = MathUtils.clamp(x + (Math.random() - .5) * 1.7, -7.2, 7.2);
	z = MathUtils.clamp(z + (Math.random() - .5) * 1.7, -11.5, 8.5);
	return {
		x,
		y: dropHeight(rest, gravity),
		z
	};
}
var usePeso = create((set, get) => ({
	started: false,
	planetId: "earth",
	gravity: 9.81,
	restitution: .25,
	bodies: makeScenery(),
	enter: () => set({ started: true }),
	setPlanet: (id) => {
		const planet = PLANETS.find((p) => p.id === id);
		if (!planet) return;
		set({
			planetId: id,
			gravity: planet.g
		});
	},
	setGravity: (g) => {
		set({
			gravity: g,
			planetId: PLANETS.find((p) => Math.abs(p.g - g) < .001)?.id ?? null
		});
	},
	setRestitution: (r) => set({ restitution: r }),
	spawn: (kind) => {
		const { gravity } = get();
		const def = CATALOG[kind];
		const point = dropPoint(gravity, def.rest);
		const tilt = def.group === "shape" ? (Math.random() - .5) * .35 : 0;
		const body = makeBody(kind, point.x, point.z, point.y, [
			tilt,
			Math.random() * Math.PI * 2,
			tilt * .45
		], false, seq % 5);
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
	}
}));
function formatG(value) {
	return value.toFixed(2);
}
function Chrome() {
	const started = usePeso((s) => s.started);
	const planetId = usePeso((s) => s.planetId);
	const gravity = usePeso((s) => s.gravity);
	const count = usePeso((s) => s.bodies.length);
	const planet = planetById(planetId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "topbar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "brand",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Peso" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Plaza" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "readout",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: planet?.name ?? "Manual" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "num",
					children: [formatG(gravity), " m/s²"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "num",
					children: [count, " cuerpos"]
				})
			]
		})]
	}), started ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dock, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, {})] });
}
function Gate() {
	const planetId = usePeso((s) => s.planetId);
	const setPlanet = usePeso((s) => s.setPlanet);
	const enter = usePeso((s) => s.enter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gate",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "gate-card",
			"aria-labelledby": "gate-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Plaza cotidiana"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					id: "gate-title",
					children: "Elige la gravedad"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "La calle es de esta ciudad. El peso, del planeta que elijas."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "planets",
					role: "listbox",
					"aria-label": "Planeta",
					children: PLANETS.map((planet) => {
						const on = planet.id === planetId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "planet",
							role: "option",
							"aria-selected": on,
							"data-on": on ? "true" : "false",
							onClick: () => setPlanet(planet.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: planet.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "num",
								children: formatG(planet.g)
							})]
						}, planet.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "enter",
					onClick: enter,
					children: "Entrar a la plaza"
				})
			]
		})
	});
}
function Dock() {
	const planetId = usePeso((s) => s.planetId);
	const gravity = usePeso((s) => s.gravity);
	const restitution = usePeso((s) => s.restitution);
	const setPlanet = usePeso((s) => s.setPlanet);
	const setGravity = usePeso((s) => s.setGravity);
	const setRestitution = usePeso((s) => s.setRestitution);
	const spawn = usePeso((s) => s.spawn);
	const spawnRandomShape = usePeso((s) => s.spawnRandomShape);
	const clear = usePeso((s) => s.clear);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "dock",
		"aria-label": "Herramientas",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dock-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "section-label",
					children: "Soltar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "clear",
					onClick: clear,
					children: "Limpiar"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroller",
				children: DAILY.map((kind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpawnButton, {
					kind,
					onSpawn: spawn
				}, kind))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "section-label",
				children: "Formas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scroller",
				children: [SHAPES.map((kind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpawnButton, {
					kind,
					onSpawn: spawn
				}, kind)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "chip",
					onClick: spawnRandomShape,
					children: "Aleatoria"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fields",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "field-label",
							children: "Planeta"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "select",
							"aria-label": "Planeta",
							value: planetId ?? "manual",
							onChange: (event) => {
								if (event.target.value !== "manual") setPlanet(event.target.value);
							},
							children: [planetId == null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "manual",
								children: "Manual"
							}) : null, PLANETS.map((planet) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: planet.id,
								children: planet.name
							}, planet.id))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "field-label",
							children: ["Gravedad", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", {
								className: "num",
								children: [formatG(gravity), " m/s²"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider, {
							className: "slider",
							min: .4,
							max: 26,
							step: .01,
							value: [gravity],
							onValueChange: (values) => setGravity(values[0] ?? gravity),
							"aria-label": "Gravedad",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
								className: "slider-track",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "slider-range" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "slider-thumb" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "field-label",
							children: ["Rebote", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", {
								className: "num",
								children: [Math.round(restitution * 100), "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider, {
							className: "slider",
							min: 0,
							max: .9,
							step: .01,
							value: [restitution],
							onValueChange: (values) => setRestitution(values[0] ?? restitution),
							"aria-label": "Rebote",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
								className: "slider-track",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "slider-range" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "slider-thumb" })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hint",
				children: "Arrastra un cuerpo para moverlo. La rueda cambia la profundidad. El suelo vacío orbita."
			})
		]
	});
}
function SpawnButton({ kind, onSpawn }) {
	const label = CATALOG[kind].label;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "chip",
		onClick: () => onSpawn(kind),
		"aria-label": `Soltar ${label}`,
		children: label
	});
}
var STYLES = [
	{
		wall: "#d7d2c8",
		glass: "#8ea4b2",
		lit: "#f0e2c4"
	},
	{
		wall: "#b7b1a6",
		glass: "#7d96a4",
		lit: "#f3e6c8"
	},
	{
		wall: "#8d4e3f",
		glass: "#d9c8b6",
		lit: "#f4e2bc"
	},
	{
		wall: "#6c7278",
		glass: "#c5d2da",
		lit: "#f3ead4"
	},
	{
		wall: "#cfc6b8",
		glass: "#93a7ae",
		lit: "#f6e7c8"
	},
	{
		wall: "#a39e96",
		glass: "#8798a1",
		lit: "#f0deb8"
	}
];
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
var cache = /* @__PURE__ */ new Map();
function facadeTexture(style) {
	const cached = cache.get(style);
	if (cached) return cached;
	const s = STYLES[style % STYLES.length] ?? STYLES[0];
	const canvas = document.createElement("canvas");
	canvas.width = 128;
	canvas.height = 160;
	const g = canvas.getContext("2d");
	if (!g) {
		const fallback = new CanvasTexture(canvas);
		cache.set(style, fallback);
		return fallback;
	}
	g.fillStyle = s.wall;
	g.fillRect(0, 0, 128, 160);
	g.fillStyle = "rgba(28, 27, 25, 0.08)";
	g.fillRect(0, 78, 128, 2);
	const rand = mulberry32(style * 97 + 11);
	for (let row = 0; row < 2; row += 1) for (let col = 0; col < 2; col += 1) {
		const x = 16 + col * 54;
		const y = 12 + row * 78;
		g.fillStyle = rand() > .84 ? s.lit : s.glass;
		g.fillRect(x, y, 38, 50);
		g.fillStyle = "rgba(255,255,255,0.2)";
		g.fillRect(x, y, 38, 3);
	}
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	tex.wrapS = tex.wrapT = RepeatWrapping;
	tex.anisotropy = 8;
	cache.set(style, tex);
	return tex;
}
var ROOF = [
	"#8a847c",
	"#6a6660",
	"#5c4038",
	"#4a4e52",
	"#7a736a",
	"#5e5a55"
];
var SHOP = [
	"#2e3338",
	"#3a342e",
	"#4a3028",
	"#2c3238",
	"#3a3834",
	"#34322e"
];
var BLOCKS = [
	{
		x: -18,
		z: -14,
		w: 10,
		d: 12,
		h: 15,
		style: 0
	},
	{
		x: -17.5,
		z: .5,
		w: 9,
		d: 12,
		h: 11,
		style: 2
	},
	{
		x: -19,
		z: 15,
		w: 11,
		d: 10,
		h: 20,
		style: 1
	},
	{
		x: -20,
		z: -28,
		w: 12,
		d: 10,
		h: 26,
		style: 4
	},
	{
		x: 18.5,
		z: -10,
		w: 9,
		d: 14,
		h: 13,
		style: 5
	},
	{
		x: 18,
		z: 6.5,
		w: 10,
		d: 12,
		h: 17,
		style: 0
	},
	{
		x: 20,
		z: 20,
		w: 12,
		d: 9,
		h: 23,
		style: 3
	},
	{
		x: 19,
		z: -26,
		w: 10,
		d: 10,
		h: 19,
		style: 1
	},
	{
		x: -16,
		z: -40,
		w: 14,
		d: 8,
		h: 34,
		style: 3
	},
	{
		x: 17,
		z: -42,
		w: 16,
		d: 8,
		h: 28,
		style: 4
	}
];
var LAMPS = [];
for (let z = -24; z <= 18; z += 8) LAMPS.push([-7.7, z], [7.7, z]);
function Building({ block }) {
	const map = (0, import_react.useMemo)(() => {
		const tex = facadeTexture(block.style).clone();
		tex.wrapS = tex.wrapT = RepeatWrapping;
		tex.repeat.set(Math.max(1, block.w / 3.2), Math.max(1, block.h / 3.4));
		tex.colorSpace = SRGBColorSpace;
		tex.anisotropy = 8;
		return tex;
	}, [
		block.style,
		block.w,
		block.h
	]);
	const roof = ROOF[block.style % ROOF.length] ?? "#6a6660";
	const shop = SHOP[block.style % SHOP.length] ?? "#2e3338";
	const faceX = (block.x > 0 ? -1 : 1) * (block.w / 2 + .04);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			block.x,
			0,
			block.z
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					block.h / 2,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					block.w,
					block.h,
					block.d
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map,
					color: "#ffffff",
					roughness: .86,
					metalness: .02
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.55,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					block.w + .08,
					3.1,
					block.d + .08
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: shop,
					roughness: .9
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					block.h + .16,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					block.w + .35,
					.32,
					block.d + .35
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: roof,
					roughness: .8
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					faceX,
					1.15,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.08,
					2.15,
					1.15
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#241f1c",
					roughness: .7
				})]
			}),
			block.style % 2 === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					faceX * .15,
					2.55,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					block.w * .55,
					.08,
					.7
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c4b8a6",
					roughness: .75
				})]
			}) : null,
			block.h > 14 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					block.w * .22,
					block.h + .48,
					block.d * .12
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.85,
					.38,
					.7
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#9aa0a4",
					roughness: .5,
					metalness: .25
				})]
			}) : null
		]
	});
}
function Ground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [110, 110] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c9c3b7",
				roughness: .96
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.004,
				-4
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [9.2, 86] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#3a3e42",
				roughness: .92,
				polygonOffset: true,
				polygonOffsetFactor: -1,
				polygonOffsetUnits: -1
			})]
		}),
		[-1, 1].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				side * 8.55,
				.006,
				-4
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [6.4, 86] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d4cfc4",
				roughness: .94,
				polygonOffset: true,
				polygonOffsetFactor: -2,
				polygonOffsetUnits: -2
			})]
		}, side)),
		[-1, 1].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				side * 4.7,
				.008,
				-4
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.12, 86] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#2c3034",
				roughness: .9,
				polygonOffset: true,
				polygonOffsetFactor: -3,
				polygonOffsetUnits: -3
			})]
		}, `gutter-${side}`)),
		Array.from({ length: 18 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.01,
				-32 + i * 3.6
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.14, 1.5] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e6e2d8",
				roughness: .6,
				polygonOffset: true,
				polygonOffsetFactor: -4,
				polygonOffsetUnits: -4
			})]
		}, `dash-${i}`)),
		Array.from({ length: 7 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				-3.6 + i * 1.2,
				.01,
				.2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.55, 3.1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e7e3d9",
				roughness: .62,
				polygonOffset: true,
				polygonOffsetFactor: -4,
				polygonOffsetUnits: -4
			})]
		}, `walk-${i}`))
	] });
}
function Lamp({ position }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					2.15,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.07,
					.09,
					4.3,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3a3f44",
					roughness: .45,
					metalness: .45
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.35,
					4.2,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.9,
					.08,
					.18
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3a3f44",
					metalness: .45,
					roughness: .45
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.7,
					4.05,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.28,
					.12,
					.22
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#f4efe2",
					emissive: "#f0e2c0",
					emissiveIntensity: .18,
					roughness: .4
				})]
			})
		]
	});
}
function Tree({ position }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.05,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.12,
				.16,
				2.1,
				8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#5c4636",
				roughness: .9
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.45,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.95,
				16,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#3f5344",
				roughness: .9
			})]
		})]
	});
}
function Person({ position, color, yaw }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		rotation: [
			0,
			yaw,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.72,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.18,
				.62,
				4,
				8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				roughness: .82
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.28,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.15,
				14,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c4a48a",
				roughness: .72
			})]
		})]
	});
}
function Shelter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			8.9,
			0,
			3.4
		],
		children: [
			[-1.2, 1.2].map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.25,
					z
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.08,
					2.5,
					.08
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3a3f44",
					metalness: .4,
					roughness: .45
				})]
			}, z)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					2.52,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.5,
					.08,
					2.8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#5c6166",
					metalness: .35,
					roughness: .4
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.35,
					-1.25
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.04,
					1.5,
					2.2
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c5d3dc",
					transparent: true,
					opacity: .35,
					roughness: .1,
					metalness: .1
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.42,
					.2
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.5,
					.08,
					1.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#6e6256",
					roughness: .8
				})]
			})
		]
	});
}
function City({ restitution }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
		BLOCKS.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { block }, `${block.x}-${block.z}`)),
		LAMPS.map(([x, z]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lamp, { position: [
			x,
			0,
			z
		] }, `${x}-${z}`)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			-9.5,
			0,
			-11
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			9.4,
			0,
			12
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			-9.3,
			0,
			15.5
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			9.6,
			0,
			-15
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shelter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Person, {
			position: [
				6.5,
				0,
				.6
			],
			color: "#3d4c5c",
			yaw: -.6
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Person, {
			position: [
				-6.6,
				0,
				-.4
			],
			color: "#6b5344",
			yaw: .8
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Person, {
			position: [
				6.2,
				0,
				4.8
			],
			color: "#4d5948",
			yaw: 2.4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RigidBody, {
			type: "fixed",
			colliders: false,
			friction: .98,
			restitution,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuboidCollider, {
					args: [
						55,
						.5,
						55
					],
					position: [
						0,
						-.5,
						0
					],
					friction: .98,
					restitution
				}),
				BLOCKS.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuboidCollider, {
					args: [
						block.w / 2,
						(block.h + .3) / 2,
						block.d / 2
					],
					position: [
						block.x,
						(block.h + .3) / 2,
						block.z
					],
					friction: .8,
					restitution
				}, `c-${block.x}-${block.z}`)),
				LAMPS.map(([x, z]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CylinderCollider, {
					args: [2.15, .09],
					position: [
						x,
						2.15,
						z
					],
					friction: .6,
					restitution
				}, `l-${x}-${z}`)),
				[
					[-9.5, -11],
					[9.4, 12],
					[-9.3, 15.5],
					[9.6, -15]
				].map(([x, z]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CylinderCollider, {
					args: [1.05, .16],
					position: [
						x,
						1.05,
						z
					],
					friction: .7,
					restitution
				}, `t-${x}-${z}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleCollider, {
					args: [.32, .2],
					position: [
						6.5,
						.7,
						.6
					],
					friction: .6,
					restitution
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleCollider, {
					args: [.32, .2],
					position: [
						-6.6,
						.7,
						-.4
					],
					friction: .6,
					restitution
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleCollider, {
					args: [.32, .2],
					position: [
						6.2,
						.7,
						4.8
					],
					friction: .6,
					restitution
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuboidCollider, {
					args: [
						.75,
						1.3,
						.12
					],
					position: [
						8.9,
						1.3,
						2.15
					],
					friction: .5,
					restitution
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuboidCollider, {
					args: [
						.7,
						.08,
						1.35
					],
					position: [
						8.9,
						2.52,
						3.4
					],
					friction: .6,
					restitution
				})
			]
		})
	] });
}
var CAR = [
	"#2c3338",
	"#e7e4dc",
	"#7a3030",
	"#1e3a4c",
	"#3f4a38"
];
var SOFA = [
	"#6d4038",
	"#3c4650",
	"#c8bba8",
	"#2e3430",
	"#7d684c"
];
var WOOD = [
	"#a7845b",
	"#8d6a43",
	"#c4a37a",
	"#6e5340",
	"#b08968"
];
var SHAPE = [
	"#b7aa96",
	"#8e9296",
	"#6f6256",
	"#d5d0c6",
	"#5d6a72"
];
function Mat({ color, roughness = .62, metalness = .04 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color,
		roughness,
		metalness
	});
}
function CarMesh({ tint }) {
	const paint = CAR[tint % CAR.length] ?? CAR[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.02,
				.05
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.62,
				.5,
				3.55
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: paint,
				roughness: .38,
				metalness: .28
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.32,
				-.2
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.46,
				.42,
				1.85
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: paint,
				roughness: .36,
				metalness: .26
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.34,
				.55
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.38,
				.32,
				.08
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#8ea4b3",
				roughness: .12,
				metalness: .45
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.08,
				1.78
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.4,
				.12,
				.08
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#f4efe4",
				roughness: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.08,
				-1.76
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.35,
				.1,
				.08
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#8f2d2a",
				roughness: .45
			})]
		}),
		[
			[
				-.74,
				-.28,
				1.18
			],
			[
				.74,
				-.28,
				1.18
			],
			[
				-.74,
				-.28,
				-1.18
			],
			[
				.74,
				-.28,
				-1.18
			]
		].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: p,
			rotation: [
				0,
				0,
				Math.PI / 2
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.28,
				.28,
				.18,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#1c1e21",
				roughness: .7
			})]
		}, p.join()))
	] });
}
function VanMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.02,
				0
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.82,
				1.62,
				4.15
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#e4e2dc",
				roughness: .48,
				metalness: .12
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.28,
				1.55
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.64,
				.7,
				.06
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#8ea4b3",
				roughness: .15,
				metalness: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.55,
				1.35
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.7,
				.16,
				.2
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#2a2e32",
				roughness: .6
			})]
		}),
		[
			[
				-.86,
				-.58,
				1.35
			],
			[
				.86,
				-.58,
				1.35
			],
			[
				-.86,
				-.58,
				-1.35
			],
			[
				.86,
				-.58,
				-1.35
			]
		].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: p,
			rotation: [
				0,
				0,
				Math.PI / 2
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.32,
				.32,
				.2,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#1c1e21",
				roughness: .72
			})]
		}, p.join()))
	] });
}
function FridgeMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.68,
				1.74,
				.64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#e7e8ea",
				roughness: .4,
				metalness: .08
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.3,
				.15,
				.33
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.04,
				.7,
				.04
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#8d9298",
				metalness: .6,
				roughness: .3
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.28,
				.325
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.66,
				.015,
				.01
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { color: "#c5c8cc" })]
		})
	] });
}
function WasherMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.68,
				.86,
				.7
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#f2f3f4",
				roughness: .42,
				metalness: .08
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.04,
				.36
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.22,
				.22,
				.04,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#243038",
				roughness: .25,
				metalness: .35
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.04,
				.385
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.2,
				.018,
				8,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#d5d8dc",
				metalness: .5,
				roughness: .3
			})]
		})
	] });
}
function TvMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.08,
				0
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.28,
				.74,
				.06
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#1c1e22",
				roughness: .4,
				metalness: .3
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.08,
				.02
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.16,
				.62,
				.02
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#12171c",
				roughness: .2,
				metalness: .5,
				emissive: "#0c1218",
				emissiveIntensity: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.32,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.08,
				.22,
				.06
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#2a2c30",
				metalness: .4,
				roughness: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.44,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.42,
				.04,
				.16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#2a2c30",
				metalness: .4,
				roughness: .4
			})]
		})
	] });
}
function SofaMesh({ tint }) {
	const cloth = SOFA[tint % SOFA.length] ?? SOFA[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.12,
				.06
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				2.02,
				.32,
				.78
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: cloth,
				roughness: .86
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.12,
				-.28
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				2.02,
				.48,
				.2
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: cloth,
				roughness: .86
			})]
		}),
		[-.92, .92].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				x,
				-.02,
				.04
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.16,
				.36,
				.8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: cloth,
				roughness: .86
			})]
		}, x))
	] });
}
function CannonMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.08,
				.15
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.16,
				.2,
				1.7,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#2b2e31",
				roughness: .45,
				metalness: .55
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.08,
				-.55
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.55,
				.22,
				.7
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#3a332c",
				roughness: .8
			})]
		}),
		[-.38, .38].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				x,
				-.2,
				-.2
			],
			rotation: [
				0,
				0,
				Math.PI / 2
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.2,
				.2,
				.1,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#1c1e21",
				roughness: .7
			})]
		}, x))
	] });
}
function BarrelMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		castShadow: true,
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.32,
			.32,
			.92,
			16
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color: "#6e5340",
			roughness: .78
		})]
	});
}
function CrateMesh({ tint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		castShadow: true,
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.72,
			.72,
			.72
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color: WOOD[tint % WOOD.length] ?? WOOD[0],
			roughness: .82
		})]
	});
}
function ConeMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		castShadow: true,
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
			.22,
			.84,
			16
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color: "#d36a28",
			roughness: .68
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.02,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.13,
			.15,
			.07,
			16
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color: "#f3f1ec",
			roughness: .5
		})]
	})] });
}
function ChairMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.02,
				0
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.48,
				.06,
				.48
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#8d6a43",
				roughness: .75
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.24,
				-.2
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.48,
				.4,
				.06
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#8d6a43",
				roughness: .75
			})]
		}),
		[
			[
				-.18,
				-.2,
				-.18
			],
			[
				.18,
				-.2,
				-.18
			],
			[
				-.18,
				-.2,
				.18
			],
			[
				.18,
				-.2,
				.18
			]
		].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: p,
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.05,
				.4,
				.05
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#5c4634",
				roughness: .8
			})]
		}, p.join()))
	] });
}
function TireMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		rotation: [
			0,
			Math.PI / 2,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.24,
				.1,
				12,
				20
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#1c1e21",
				roughness: .75
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.14,
				.14,
				.12,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#8d9298",
				metalness: .6,
				roughness: .35
			})]
		})]
	});
}
function MicrowaveMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.54,
				.32,
				.38
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#d5d7da",
				roughness: .4,
				metalness: .2
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.04,
				0,
				.195
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.32,
				.2,
				.02
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#1c242b",
				roughness: .2,
				metalness: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.2,
				.04,
				.2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.04,
				.04,
				.02
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { color: "#2a2e32" })]
		})
	] });
}
function DumpsterMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		castShadow: true,
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			1.38,
			1.14,
			.86
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color: "#3e4a3c",
			roughness: .72,
			metalness: .08
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.5,
			.02
		],
		rotation: [
			.35,
			0,
			0
		],
		castShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			1.34,
			.08,
			.7
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color: "#354036",
			roughness: .7,
			metalness: .1
		})]
	})] });
}
function PianoMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.42,
				.96,
				.7
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#1a1c1e",
				roughness: .4,
				metalness: .2
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.12,
				.36
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.2,
				.08,
				.08
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#f3f1ec",
				roughness: .45
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.28,
				.28
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.9,
				.28,
				.04
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#2a241c",
				roughness: .55
			})]
		})
	] });
}
function BallMesh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.26,
				24,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#a85b3a",
				roughness: .72
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.26,
				.012,
				8,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#3f291f",
				roughness: .6
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				0,
				0,
				Math.PI / 2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.26,
				.01,
				8,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
				color: "#3f291f",
				roughness: .6
			})]
		})
	] });
}
function ShapeMesh({ kind, tint }) {
	const color = SHAPE[tint % SHAPE.length] ?? SHAPE[0];
	if (kind === "cube") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		castShadow: true,
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.8,
			.8,
			.8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color,
			roughness: .7,
			metalness: .08
		})]
	});
	if (kind === "sphere") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		castShadow: true,
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			.4,
			28,
			18
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color,
			roughness: .35,
			metalness: .25
		})]
	});
	if (kind === "cylinder") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		castShadow: true,
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.32,
			.32,
			1,
			20
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color,
			roughness: .45,
			metalness: .35
		})]
	});
	if (kind === "capsule") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		castShadow: true,
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
			.28,
			.68,
			8,
			16
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color,
			roughness: .4,
			metalness: .15
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		castShadow: true,
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
			.4,
			1.1,
			20
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, {
			color,
			roughness: .5,
			metalness: .12
		})]
	});
}
function PropMesh({ kind, tint }) {
	switch (kind) {
		case "car": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarMesh, { tint });
		case "van": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VanMesh, {});
		case "fridge": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FridgeMesh, {});
		case "washer": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WasherMesh, {});
		case "tv": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TvMesh, {});
		case "sofa": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SofaMesh, { tint });
		case "cannon": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CannonMesh, {});
		case "barrel": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarrelMesh, {});
		case "crate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrateMesh, { tint });
		case "cone": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConeMesh, {});
		case "chair": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChairMesh, {});
		case "tire": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TireMesh, {});
		case "microwave": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicrowaveMesh, {});
		case "dumpster": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DumpsterMesh, {});
		case "piano": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PianoMesh, {});
		case "ball": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BallMesh, {});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShapeMesh, {
			kind,
			tint
		});
	}
}
function SolidCollider({ def, restitution }) {
	const common = {
		friction: def.friction,
		restitution,
		mass: def.mass
	};
	const c = def.collider;
	if (c.shape === "cuboid") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuboidCollider, {
		args: c.args,
		...common
	});
	if (c.shape === "ball") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BallCollider, {
		args: c.args,
		...common
	});
	if (c.shape === "cylinder") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CylinderCollider, {
		args: c.args,
		rotation: c.rotation,
		...common
	});
	if (c.shape === "capsule") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleCollider, {
		args: c.args,
		...common
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConeCollider, {
		args: c.args,
		...common
	});
}
function DynBody({ body, restitution }) {
	const def = CATALOG[body.kind];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RigidBody, {
		position: body.position,
		rotation: body.rotation,
		colliders: false,
		ccd: true,
		softCcdPrediction: .22,
		linearDamping: .08,
		angularDamping: .28,
		additionalSolverIterations: 3,
		userData: body.meta,
		canSleep: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolidCollider, {
			def,
			restitution
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropMesh, {
			kind: body.kind,
			tint: body.tint
		})]
	});
}
var Dyn = (0, import_react.memo)(DynBody, (a, b) => a.body === b.body && a.restitution === b.restitution);
function SkyDome() {
	const material = (0, import_react.useMemo)(() => new ShaderMaterial({
		glslVersion: GLSL3,
		side: 1,
		depthWrite: false,
		uniforms: {
			topColor: { value: new Color("#8eafc8") },
			horizonColor: { value: new Color("#d7e0e7") }
		},
		vertexShader: `
          out vec3 vPos;
          void main() {
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
		fragmentShader: `
          in vec3 vPos;
          uniform vec3 topColor;
          uniform vec3 horizonColor;
          out vec4 fragColor;
          void main() {
            float h = normalize(vPos).y;
            vec3 col = mix(horizonColor, topColor, smoothstep(0.0, 0.72, max(h, 0.0)));
            fragColor = vec4(col, 1.0);
          }
        `
	}), []);
	(0, import_react.useEffect)(() => () => material.dispose(), [material]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		renderOrder: -1,
		frustumCulled: false,
		material,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			180,
			28,
			16
		] })
	});
}
function Lights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#d5e2ec",
			"#b5aa9c",
			.55
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .28 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				22,
				28,
				10
			],
			intensity: 2.35,
			color: "#fff5e8",
			castShadow: true,
			"shadow-mapSize-width": 2048,
			"shadow-mapSize-height": 2048,
			"shadow-camera-left": -32,
			"shadow-camera-right": 32,
			"shadow-camera-top": 32,
			"shadow-camera-bottom": -32,
			"shadow-camera-near": 2,
			"shadow-camera-far": 80,
			"shadow-bias": -3e-4,
			"shadow-normalBias": .04
		})
	] });
}
function CameraBridge() {
	useFrame(({ camera }) => {
		bindCamera(camera);
	});
	return null;
}
var _hit = new Vector3();
var _ang = new Vector3();
var _ndc = new Vector2();
var _raycaster = new Raycaster();
function DragAndSettle() {
	const { camera, gl, controls } = useThree();
	const { rapier, world } = useRapier();
	const drag = (0, import_react.useRef)(null);
	const trash = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const gravity = usePeso((s) => s.gravity);
	const restitution = usePeso((s) => s.restitution);
	(0, import_react.useEffect)(() => {
		world.bodies.forEach((body) => {
			if (body.isDynamic()) body.wakeUp();
		});
	}, [
		gravity,
		restitution,
		world
	]);
	const place = (state) => {
		if (!state.ray.intersectPlane(state.plane, _hit)) return;
		_hit.add(state.offset);
		_hit.y = Math.min(22, Math.max(state.rest + .03, _hit.y));
		_hit.x = Math.min(22, Math.max(-22, _hit.x));
		_hit.z = Math.min(22, Math.max(-22, _hit.z));
		state.desired.copy(_hit);
		const now = performance.now();
		const dt = Math.min(.05, Math.max(1 / 120, (now - state.lastTime) / 1e3));
		if (state.lastTime > 0) {
			state.vel.copy(state.desired).sub(state.last).divideScalar(dt);
			const speed = state.vel.length();
			if (speed > 14) state.vel.multiplyScalar(14 / speed);
		}
		state.last.copy(state.desired);
		state.lastTime = now;
	};
	(0, import_react.useEffect)(() => {
		const el = gl.domElement;
		const orbit = controls;
		const rayFromEvent = (ev) => {
			const rect = el.getBoundingClientRect();
			_ndc.x = (ev.clientX - rect.left) / rect.width * 2 - 1;
			_ndc.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
			_raycaster.setFromCamera(_ndc, camera);
		};
		const onDown = (ev) => {
			if (ev.button !== 0 || drag.current) return;
			rayFromEvent(ev);
			const origin = {
				x: _raycaster.ray.origin.x,
				y: _raycaster.ray.origin.y,
				z: _raycaster.ray.origin.z
			};
			const dir = {
				x: _raycaster.ray.direction.x,
				y: _raycaster.ray.direction.y,
				z: _raycaster.ray.direction.z
			};
			const hit = world.castRay(new rapier.Ray(origin, dir), 80, true);
			const body = hit?.collider.parent();
			if (!hit || !body?.isDynamic() || !body.isValid()) return;
			ev.preventDefault();
			ev.stopImmediatePropagation();
			const toi = hit.timeOfImpact;
			const point = _raycaster.ray.at(toi, new Vector3());
			const t = body.translation();
			const r = body.rotation();
			const meta = body.userData;
			const normal = new Vector3();
			camera.getWorldDirection(normal);
			const plane = new Plane().setFromNormalAndCoplanarPoint(normal, point);
			body.setLinvel({
				x: 0,
				y: 0,
				z: 0
			}, true);
			body.setAngvel({
				x: 0,
				y: 0,
				z: 0
			}, true);
			body.setBodyType(zA.KinematicPositionBased, true);
			const desired = new Vector3(t.x, t.y, t.z);
			drag.current = {
				body,
				offset: new Vector3(t.x - point.x, t.y - point.y, t.z - point.z),
				plane,
				normal,
				hit: point.clone(),
				desired,
				last: desired.clone(),
				vel: new Vector3(),
				rot: {
					x: r.x,
					y: r.y,
					z: r.z,
					w: r.w
				},
				rest: meta?.rest ?? .4,
				depth: 0,
				ray: _raycaster.ray.clone(),
				lastTime: performance.now()
			};
			if (orbit) orbit.enabled = false;
			el.style.cursor = "grabbing";
		};
		const onMove = (ev) => {
			const state = drag.current;
			if (!state && ev.target !== el) return;
			rayFromEvent(ev);
			if (!state) {
				const origin = {
					x: _raycaster.ray.origin.x,
					y: _raycaster.ray.origin.y,
					z: _raycaster.ray.origin.z
				};
				const dir = {
					x: _raycaster.ray.direction.x,
					y: _raycaster.ray.direction.y,
					z: _raycaster.ray.direction.z
				};
				const body = world.castRay(new rapier.Ray(origin, dir), 80, true)?.collider.parent();
				el.style.cursor = body?.isDynamic() ? "grab" : "";
				return;
			}
			state.ray.copy(_raycaster.ray);
			place(state);
		};
		const end = () => {
			const state = drag.current;
			drag.current = null;
			if (orbit) orbit.enabled = true;
			el.style.cursor = "";
			if (!state || !state.body.isValid()) return;
			if (performance.now() - state.lastTime > 100) state.vel.set(0, 0, 0);
			state.body.setBodyType(zA.Dynamic, true);
			state.body.setLinvel({
				x: state.vel.x,
				y: state.vel.y,
				z: state.vel.z
			}, true);
			_ang.crossVectors(state.offset, state.vel);
			const denom = Math.max(.25, state.offset.lengthSq());
			_ang.multiplyScalar(.35 / denom);
			const spin = _ang.length();
			if (spin > 8) _ang.multiplyScalar(8 / spin);
			state.body.setAngvel({
				x: _ang.x,
				y: _ang.y,
				z: _ang.z
			}, true);
			state.body.wakeUp();
		};
		const onWheel = (ev) => {
			const state = drag.current;
			if (!state) return;
			ev.preventDefault();
			ev.stopImmediatePropagation();
			state.depth = Math.min(10, Math.max(-6, state.depth + ev.deltaY * .006));
			const point = state.hit.clone().addScaledVector(state.normal, state.depth);
			state.plane.setFromNormalAndCoplanarPoint(state.normal, point);
			place(state);
		};
		el.addEventListener("pointerdown", onDown, true);
		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerup", end);
		window.addEventListener("pointercancel", end);
		el.addEventListener("wheel", onWheel, {
			capture: true,
			passive: false
		});
		return () => {
			el.removeEventListener("pointerdown", onDown, true);
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", end);
			window.removeEventListener("pointercancel", end);
			el.removeEventListener("wheel", onWheel, true);
			if (orbit) orbit.enabled = true;
		};
	}, [
		camera,
		controls,
		gl,
		rapier,
		world
	]);
	useBeforePhysicsStep(() => {
		const state = drag.current;
		if (!state || !state.body.isValid()) return;
		state.body.setNextKinematicTranslation({
			x: state.desired.x,
			y: state.desired.y,
			z: state.desired.z
		});
		state.body.setNextKinematicRotation(state.rot);
	});
	useAfterPhysicsStep(() => {
		world.bodies.forEach((body) => {
			if (!body.isDynamic() || !body.isValid()) return;
			const t = body.translation();
			const meta = body.userData;
			if (t.y < -6 || Math.abs(t.x) > 42 || Math.abs(t.z) > 42) {
				if (typeof meta?.id === "number") trash.current.add(meta.id);
			}
			const v = body.linvel();
			const speed = Math.hypot(v.x, v.y, v.z);
			if (speed > 36) {
				const k = 36 / speed;
				body.setLinvel({
					x: v.x * k,
					y: v.y * k,
					z: v.z * k
				}, true);
			}
			const w = body.angvel();
			const spin = Math.hypot(w.x, w.y, w.z);
			if (spin > 16) {
				const k = 16 / spin;
				body.setAngvel({
					x: w.x * k,
					y: w.y * k,
					z: w.z * k
				}, true);
			}
		});
	});
	useFrame(() => {
		const flag = window;
		if (!flag.__pesoReady) flag.__pesoReady = true;
		if (trash.current.size === 0) return;
		const ids = [...trash.current];
		trash.current.clear();
		usePeso.getState().remove(ids);
	});
	return null;
}
function Bodies() {
	const bodies = usePeso((s) => s.bodies);
	const restitution = usePeso((s) => s.restitution);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: bodies.map((body) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dyn, {
		body,
		restitution
	}, body.id)) });
}
function World() {
	const gravity = usePeso((s) => s.gravity);
	const restitution = usePeso((s) => s.restitution);
	const g = (0, import_react.useMemo)(() => [
		0,
		-gravity,
		0
	], [gravity]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Physics, {
		gravity: g,
		timeStep: 1 / 60,
		numSolverIterations: 8,
		numInternalPgsIterations: 2,
		maxCcdSubsteps: 3,
		interpolate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(City, { restitution }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bodies, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragAndSettle, {})
		]
	});
}
function Scene() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#d7e0e7"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				"#d7e0e7",
				36,
				92
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyDome, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lights, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			makeDefault: true,
			target: [
				.2,
				.9,
				-.4
			],
			enableDamping: true,
			dampingFactor: .12,
			maxPolarAngle: Math.PI / 2.06,
			minPolarAngle: .22,
			minDistance: 4.5,
			maxDistance: 38,
			enablePan: false,
			zoomToCursor: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraBridge, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(World, {})
	] });
}
function Sandbox() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stage",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
			className: "view",
			shadows: true,
			dpr: [1, 1.5],
			camera: {
				position: [
					6.4,
					4.3,
					13.4
				],
				fov: 40,
				near: .2,
				far: 280
			},
			gl: {
				antialias: true,
				toneMapping: 4,
				toneMappingExposure: 1.06
			},
			onCreated: ({ gl }) => {
				gl.shadowMap.type = 2;
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chrome, {})]
	});
}
function Home() {
	const [live, setLive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setLive(true), []);
	if (!live) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boot, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandbox, {});
}
function Boot() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "boot",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Plaza cotidiana"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Peso" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "boot-note",
				children: "Abriendo la calle…"
			})
		]
	});
}
//#endregion
export { Home as component };
