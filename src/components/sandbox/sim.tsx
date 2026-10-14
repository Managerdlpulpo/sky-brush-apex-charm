import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, useAfterPhysicsStep, useBeforePhysicsStep, useRapier } from "@react-three/rapier";
import { RigidBodyType, type RigidBody } from "@dimforge/rapier3d-compat";
import * as THREE from "three";
import { City } from "./city";
import { Dyn } from "./props";
import { bindCamera, usePeso } from "./store";

function SkyDome() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        glslVersion: THREE.GLSL3,
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: {
          topColor: { value: new THREE.Color("#8eafc8") },
          horizonColor: { value: new THREE.Color("#d7e0e7") },
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
        `,
      }),
    [],
  );
  useEffect(() => () => material.dispose(), [material]);
  return (
    <mesh renderOrder={-1} frustumCulled={false} material={material}>
      <sphereGeometry args={[180, 28, 16]} />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <hemisphereLight args={["#d5e2ec", "#b5aa9c", 0.55]} />
      <ambientLight intensity={0.28} />
      <directionalLight
        position={[22, 28, 10]}
        intensity={2.35}
        color="#fff5e8"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-32}
        shadow-camera-right={32}
        shadow-camera-top={32}
        shadow-camera-bottom={-32}
        shadow-camera-near={2}
        shadow-camera-far={80}
        shadow-bias={-0.0003}
        shadow-normalBias={0.04}
      />
    </>
  );
}

function CameraBridge() {
  useFrame(({ camera }) => {
    bindCamera(camera);
  });
  return null;
}

type Drag = {
  body: RigidBody;
  offset: THREE.Vector3;
  plane: THREE.Plane;
  normal: THREE.Vector3;
  hit: THREE.Vector3;
  desired: THREE.Vector3;
  last: THREE.Vector3;
  vel: THREE.Vector3;
  rot: { x: number; y: number; z: number; w: number };
  rest: number;
  depth: number;
  ray: THREE.Ray;
  lastTime: number;
};

const _hit = new THREE.Vector3();
const _ang = new THREE.Vector3();
const _ndc = new THREE.Vector2();
const _raycaster = new THREE.Raycaster();

function DragAndSettle() {
  const { camera, gl, controls } = useThree();
  const { rapier, world } = useRapier();
  const drag = useRef<Drag | null>(null);
  const trash = useRef<Set<number>>(new Set());
  const gravity = usePeso((s) => s.gravity);
  const restitution = usePeso((s) => s.restitution);

  useEffect(() => {
    world.bodies.forEach((body) => {
      if (body.isDynamic()) body.wakeUp();
    });
  }, [gravity, restitution, world]);

  const place = (state: Drag) => {
    if (!state.ray.intersectPlane(state.plane, _hit)) return;
    _hit.add(state.offset);
    _hit.y = Math.min(22, Math.max(state.rest + 0.03, _hit.y));
    _hit.x = Math.min(22, Math.max(-22, _hit.x));
    _hit.z = Math.min(22, Math.max(-22, _hit.z));
    state.desired.copy(_hit);
    const now = performance.now();
    const dt = Math.min(0.05, Math.max(1 / 120, (now - state.lastTime) / 1000));
    if (state.lastTime > 0) {
      state.vel.copy(state.desired).sub(state.last).divideScalar(dt);
      const speed = state.vel.length();
      if (speed > 14) state.vel.multiplyScalar(14 / speed);
    }
    state.last.copy(state.desired);
    state.lastTime = now;
  };

  useEffect(() => {
    const el = gl.domElement;
    const orbit = controls as { enabled?: boolean } | null;

    const rayFromEvent = (ev: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      _ndc.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
      _ndc.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
      _raycaster.setFromCamera(_ndc, camera);
    };

    const onDown = (ev: PointerEvent) => {
      if (ev.button !== 0 || drag.current) return;
      rayFromEvent(ev);
      const origin = {
        x: _raycaster.ray.origin.x,
        y: _raycaster.ray.origin.y,
        z: _raycaster.ray.origin.z,
      };
      const dir = {
        x: _raycaster.ray.direction.x,
        y: _raycaster.ray.direction.y,
        z: _raycaster.ray.direction.z,
      };
      const hit = world.castRay(new rapier.Ray(origin, dir), 80, true);
      const body = hit?.collider.parent();
      if (!hit || !body?.isDynamic() || !body.isValid()) return;
      ev.preventDefault();
      ev.stopImmediatePropagation();
      const toi = hit.timeOfImpact;
      const point = _raycaster.ray.at(toi, new THREE.Vector3());
      const t = body.translation();
      const r = body.rotation();
      const meta = body.userData as { rest?: number } | undefined;
      const normal = new THREE.Vector3();
      camera.getWorldDirection(normal);
      const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(normal, point);
      body.setLinvel({ x: 0, y: 0, z: 0 }, true);
      body.setAngvel({ x: 0, y: 0, z: 0 }, true);
      body.setBodyType(RigidBodyType.KinematicPositionBased, true);
      const desired = new THREE.Vector3(t.x, t.y, t.z);
      drag.current = {
        body,
        offset: new THREE.Vector3(t.x - point.x, t.y - point.y, t.z - point.z),
        plane,
        normal,
        hit: point.clone(),
        desired,
        last: desired.clone(),
        vel: new THREE.Vector3(),
        rot: { x: r.x, y: r.y, z: r.z, w: r.w },
        rest: meta?.rest ?? 0.4,
        depth: 0,
        ray: _raycaster.ray.clone(),
        lastTime: performance.now(),
      };
      if (orbit) orbit.enabled = false;
      el.style.cursor = "grabbing";
    };

    const onMove = (ev: PointerEvent) => {
      const state = drag.current;
      if (!state && ev.target !== el) return;
      rayFromEvent(ev);
      if (!state) {
        const origin = {
          x: _raycaster.ray.origin.x,
          y: _raycaster.ray.origin.y,
          z: _raycaster.ray.origin.z,
        };
        const dir = {
          x: _raycaster.ray.direction.x,
          y: _raycaster.ray.direction.y,
          z: _raycaster.ray.direction.z,
        };
        const hit = world.castRay(new rapier.Ray(origin, dir), 80, true);
        const body = hit?.collider.parent();
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
      state.body.setBodyType(RigidBodyType.Dynamic, true);
      state.body.setLinvel({ x: state.vel.x, y: state.vel.y, z: state.vel.z }, true);
      _ang.crossVectors(state.offset, state.vel);
      const denom = Math.max(0.25, state.offset.lengthSq());
      _ang.multiplyScalar(0.35 / denom);
      const spin = _ang.length();
      if (spin > 8) _ang.multiplyScalar(8 / spin);
      state.body.setAngvel({ x: _ang.x, y: _ang.y, z: _ang.z }, true);
      state.body.wakeUp();
    };

    const onWheel = (ev: WheelEvent) => {
      const state = drag.current;
      if (!state) return;
      ev.preventDefault();
      ev.stopImmediatePropagation();
      state.depth = Math.min(10, Math.max(-6, state.depth + ev.deltaY * 0.006));
      const point = state.hit.clone().addScaledVector(state.normal, state.depth);
      state.plane.setFromNormalAndCoplanarPoint(state.normal, point);
      place(state);
    };

    el.addEventListener("pointerdown", onDown, true);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    el.addEventListener("wheel", onWheel, { capture: true, passive: false });
    return () => {
      el.removeEventListener("pointerdown", onDown, true);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      el.removeEventListener("wheel", onWheel, true);
      if (orbit) orbit.enabled = true;
    };
  }, [camera, controls, gl, rapier, world]);

  useBeforePhysicsStep(() => {
    const state = drag.current;
    if (!state || !state.body.isValid()) return;
    state.body.setNextKinematicTranslation({
      x: state.desired.x,
      y: state.desired.y,
      z: state.desired.z,
    });
    state.body.setNextKinematicRotation(state.rot);
  });

  useAfterPhysicsStep(() => {
    world.bodies.forEach((body) => {
      if (!body.isDynamic() || !body.isValid()) return;
      const t = body.translation();
      const meta = body.userData as { id?: number } | undefined;
      if (t.y < -6 || Math.abs(t.x) > 42 || Math.abs(t.z) > 42) {
        if (typeof meta?.id === "number") trash.current.add(meta.id);
      }
      const v = body.linvel();
      const speed = Math.hypot(v.x, v.y, v.z);
      if (speed > 36) {
        const k = 36 / speed;
        body.setLinvel({ x: v.x * k, y: v.y * k, z: v.z * k }, true);
      }
      const w = body.angvel();
      const spin = Math.hypot(w.x, w.y, w.z);
      if (spin > 16) {
        const k = 16 / spin;
        body.setAngvel({ x: w.x * k, y: w.y * k, z: w.z * k }, true);
      }
    });
  });

  useFrame(() => {
    const flag = window as Window & { __pesoReady?: boolean };
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
  return (
    <>
      {bodies.map((body) => (
        <Dyn key={body.id} body={body} restitution={restitution} />
      ))}
    </>
  );
}

function World() {
  const gravity = usePeso((s) => s.gravity);
  const restitution = usePeso((s) => s.restitution);
  const g = useMemo(() => [0, -gravity, 0] as [number, number, number], [gravity]);
  return (
    <Physics
      gravity={g}
      timeStep={1 / 60}
      numSolverIterations={8}
      numInternalPgsIterations={2}
      maxCcdSubsteps={3}
      interpolate
    >
      <City restitution={restitution} />
      <Bodies />
      <DragAndSettle />
    </Physics>
  );
}

export function Scene() {
  return (
    <>
      <color attach="background" args={["#d7e0e7"]} />
      <fog attach="fog" args={["#d7e0e7", 36, 92]} />
      <SkyDome />
      <Lights />
      <OrbitControls
        makeDefault
        target={[0.2, 0.9, -0.4]}
        enableDamping
        dampingFactor={0.12}
        maxPolarAngle={Math.PI / 2.06}
        minPolarAngle={0.22}
        minDistance={4.5}
        maxDistance={38}
        enablePan={false}
        zoomToCursor
      />
      <CameraBridge />
      <World />
    </>
  );
}
