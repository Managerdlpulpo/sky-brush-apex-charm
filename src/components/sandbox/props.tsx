import { memo } from "react";
import { BallCollider, CapsuleCollider, ConeCollider, CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier";
import { CATALOG, type ItemDef, type Kind } from "./catalog";
import type { SimBody } from "./store";

const CAR = ["#2c3338", "#e7e4dc", "#7a3030", "#1e3a4c", "#3f4a38"];
const SOFA = ["#6d4038", "#3c4650", "#c8bba8", "#2e3430", "#7d684c"];
const WOOD = ["#a7845b", "#8d6a43", "#c4a37a", "#6e5340", "#b08968"];
const SHAPE = ["#b7aa96", "#8e9296", "#6f6256", "#d5d0c6", "#5d6a72"];

function Mat({
  color,
  roughness = 0.62,
  metalness = 0.04,
}: {
  color: string;
  roughness?: number;
  metalness?: number;
}) {
  return <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />;
}

function CarMesh({ tint }: { tint: number }) {
  const paint = CAR[tint % CAR.length] ?? CAR[0];
  return (
    <group>
      <mesh position={[0, -0.02, 0.05]} castShadow receiveShadow>
        <boxGeometry args={[1.62, 0.5, 3.55]} />
        <Mat color={paint} roughness={0.38} metalness={0.28} />
      </mesh>
      <mesh position={[0, 0.32, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.46, 0.42, 1.85]} />
        <Mat color={paint} roughness={0.36} metalness={0.26} />
      </mesh>
      <mesh position={[0, 0.34, 0.55]} castShadow>
        <boxGeometry args={[1.38, 0.32, 0.08]} />
        <Mat color="#8ea4b3" roughness={0.12} metalness={0.45} />
      </mesh>
      <mesh position={[0, 0.08, 1.78]} castShadow>
        <boxGeometry args={[1.4, 0.12, 0.08]} />
        <Mat color="#f4efe4" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.08, -1.76]} castShadow>
        <boxGeometry args={[1.35, 0.1, 0.08]} />
        <Mat color="#8f2d2a" roughness={0.45} />
      </mesh>
      {[
        [-0.74, -0.28, 1.18],
        [0.74, -0.28, 1.18],
        [-0.74, -0.28, -1.18],
        [0.74, -0.28, -1.18],
      ].map((p) => (
        <mesh key={p.join()} position={p as [number, number, number]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.28, 0.28, 0.18, 16]} />
          <Mat color="#1c1e21" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function VanMesh() {
  return (
    <group>
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.82, 1.62, 4.15]} />
        <Mat color="#e4e2dc" roughness={0.48} metalness={0.12} />
      </mesh>
      <mesh position={[0, 0.28, 1.55]} castShadow>
        <boxGeometry args={[1.64, 0.7, 0.06]} />
        <Mat color="#8ea4b3" roughness={0.15} metalness={0.4} />
      </mesh>
      <mesh position={[0, -0.55, 1.35]} castShadow>
        <boxGeometry args={[1.7, 0.16, 0.2]} />
        <Mat color="#2a2e32" roughness={0.6} />
      </mesh>
      {[
        [-0.86, -0.58, 1.35],
        [0.86, -0.58, 1.35],
        [-0.86, -0.58, -1.35],
        [0.86, -0.58, -1.35],
      ].map((p) => (
        <mesh key={p.join()} position={p as [number, number, number]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.32, 0.32, 0.2, 16]} />
          <Mat color="#1c1e21" roughness={0.72} />
        </mesh>
      ))}
    </group>
  );
}

function FridgeMesh() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.68, 1.74, 0.64]} />
        <Mat color="#e7e8ea" roughness={0.4} metalness={0.08} />
      </mesh>
      <mesh position={[0.3, 0.15, 0.33]}>
        <boxGeometry args={[0.04, 0.7, 0.04]} />
        <Mat color="#8d9298" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.28, 0.325]}>
        <boxGeometry args={[0.66, 0.015, 0.01]} />
        <Mat color="#c5c8cc" />
      </mesh>
    </group>
  );
}

function WasherMesh() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.68, 0.86, 0.7]} />
        <Mat color="#f2f3f4" roughness={0.42} metalness={0.08} />
      </mesh>
      <mesh position={[0, 0.04, 0.36]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.04, 24]} />
        <Mat color="#243038" roughness={0.25} metalness={0.35} />
      </mesh>
      <mesh position={[0, 0.04, 0.385]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.2, 0.018, 8, 24]} />
        <Mat color="#d5d8dc" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
}

function TvMesh() {
  return (
    <group>
      <mesh position={[0, 0.08, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.28, 0.74, 0.06]} />
        <Mat color="#1c1e22" roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0.08, 0.02]}>
        <boxGeometry args={[1.16, 0.62, 0.02]} />
        <meshStandardMaterial color="#12171c" roughness={0.2} metalness={0.5} emissive="#0c1218" emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[0, -0.32, 0]} castShadow>
        <boxGeometry args={[0.08, 0.22, 0.06]} />
        <Mat color="#2a2c30" metalness={0.4} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.44, 0]} castShadow>
        <boxGeometry args={[0.42, 0.04, 0.16]} />
        <Mat color="#2a2c30" metalness={0.4} roughness={0.4} />
      </mesh>
    </group>
  );
}

function SofaMesh({ tint }: { tint: number }) {
  const cloth = SOFA[tint % SOFA.length] ?? SOFA[0];
  return (
    <group>
      <mesh position={[0, -0.12, 0.06]} castShadow receiveShadow>
        <boxGeometry args={[2.02, 0.32, 0.78]} />
        <Mat color={cloth} roughness={0.86} />
      </mesh>
      <mesh position={[0, 0.12, -0.28]} castShadow receiveShadow>
        <boxGeometry args={[2.02, 0.48, 0.2]} />
        <Mat color={cloth} roughness={0.86} />
      </mesh>
      {[-0.92, 0.92].map((x) => (
        <mesh key={x} position={[x, -0.02, 0.04]} castShadow>
          <boxGeometry args={[0.16, 0.36, 0.8]} />
          <Mat color={cloth} roughness={0.86} />
        </mesh>
      ))}
    </group>
  );
}

function CannonMesh() {
  return (
    <group>
      <mesh position={[0, 0.08, 0.15]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.2, 1.7, 16]} />
        <Mat color="#2b2e31" roughness={0.45} metalness={0.55} />
      </mesh>
      <mesh position={[0, -0.08, -0.55]} castShadow receiveShadow>
        <boxGeometry args={[0.55, 0.22, 0.7]} />
        <Mat color="#3a332c" roughness={0.8} />
      </mesh>
      {[-0.38, 0.38].map((x) => (
        <mesh key={x} position={[x, -0.2, -0.2]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
          <Mat color="#1c1e21" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function BarrelMesh() {
  return (
    <mesh castShadow receiveShadow>
      <cylinderGeometry args={[0.32, 0.32, 0.92, 16]} />
      <Mat color="#6e5340" roughness={0.78} />
    </mesh>
  );
}

function CrateMesh({ tint }: { tint: number }) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[0.72, 0.72, 0.72]} />
      <Mat color={WOOD[tint % WOOD.length] ?? WOOD[0]} roughness={0.82} />
    </mesh>
  );
}

function ConeMesh() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <coneGeometry args={[0.22, 0.84, 16]} />
        <Mat color="#d36a28" roughness={0.68} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.13, 0.15, 0.07, 16]} />
        <Mat color="#f3f1ec" roughness={0.5} />
      </mesh>
    </group>
  );
}

function ChairMesh() {
  return (
    <group>
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.48, 0.06, 0.48]} />
        <Mat color="#8d6a43" roughness={0.75} />
      </mesh>
      <mesh position={[0, 0.24, -0.2]} castShadow>
        <boxGeometry args={[0.48, 0.4, 0.06]} />
        <Mat color="#8d6a43" roughness={0.75} />
      </mesh>
      {[
        [-0.18, -0.2, -0.18],
        [0.18, -0.2, -0.18],
        [-0.18, -0.2, 0.18],
        [0.18, -0.2, 0.18],
      ].map((p) => (
        <mesh key={p.join()} position={p as [number, number, number]} castShadow>
          <boxGeometry args={[0.05, 0.4, 0.05]} />
          <Mat color="#5c4634" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function TireMesh() {
  return (
    <group rotation={[0, Math.PI / 2, 0]}>
      <mesh castShadow receiveShadow>
        <torusGeometry args={[0.24, 0.1, 12, 20]} />
        <Mat color="#1c1e21" roughness={0.75} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.12, 16]} />
        <Mat color="#8d9298" metalness={0.6} roughness={0.35} />
      </mesh>
    </group>
  );
}

function MicrowaveMesh() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.54, 0.32, 0.38]} />
        <Mat color="#d5d7da" roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh position={[-0.04, 0, 0.195]}>
        <boxGeometry args={[0.32, 0.2, 0.02]} />
        <Mat color="#1c242b" roughness={0.2} metalness={0.4} />
      </mesh>
      <mesh position={[0.2, 0.04, 0.2]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
        <Mat color="#2a2e32" />
      </mesh>
    </group>
  );
}

function DumpsterMesh() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.38, 1.14, 0.86]} />
        <Mat color="#3e4a3c" roughness={0.72} metalness={0.08} />
      </mesh>
      <mesh position={[0, 0.5, 0.02]} rotation={[0.35, 0, 0]} castShadow>
        <boxGeometry args={[1.34, 0.08, 0.7]} />
        <Mat color="#354036" roughness={0.7} metalness={0.1} />
      </mesh>
    </group>
  );
}

function PianoMesh() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.42, 0.96, 0.7]} />
        <Mat color="#1a1c1e" roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh position={[0, -0.12, 0.36]}>
        <boxGeometry args={[1.2, 0.08, 0.08]} />
        <Mat color="#f3f1ec" roughness={0.45} />
      </mesh>
      <mesh position={[0, 0.28, 0.28]}>
        <boxGeometry args={[0.9, 0.28, 0.04]} />
        <Mat color="#2a241c" roughness={0.55} />
      </mesh>
    </group>
  );
}

function BallMesh() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.26, 24, 16]} />
        <Mat color="#a85b3a" roughness={0.72} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.26, 0.012, 8, 24]} />
        <Mat color="#3f291f" roughness={0.6} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.26, 0.01, 8, 24]} />
        <Mat color="#3f291f" roughness={0.6} />
      </mesh>
    </group>
  );
}

function ShapeMesh({ kind, tint }: { kind: Kind; tint: number }) {
  const color = SHAPE[tint % SHAPE.length] ?? SHAPE[0];
  if (kind === "cube") {
    return (
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <Mat color={color} roughness={0.7} metalness={0.08} />
      </mesh>
    );
  }
  if (kind === "sphere") {
    return (
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.4, 28, 18]} />
        <Mat color={color} roughness={0.35} metalness={0.25} />
      </mesh>
    );
  }
  if (kind === "cylinder") {
    return (
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.32, 0.32, 1, 20]} />
        <Mat color={color} roughness={0.45} metalness={0.35} />
      </mesh>
    );
  }
  if (kind === "capsule") {
    return (
      <mesh castShadow receiveShadow>
        <capsuleGeometry args={[0.28, 0.68, 8, 16]} />
        <Mat color={color} roughness={0.4} metalness={0.15} />
      </mesh>
    );
  }
  return (
    <mesh castShadow receiveShadow>
      <coneGeometry args={[0.4, 1.1, 20]} />
      <Mat color={color} roughness={0.5} metalness={0.12} />
    </mesh>
  );
}

export function PropMesh({ kind, tint }: { kind: Kind; tint: number }) {
  switch (kind) {
    case "car":
      return <CarMesh tint={tint} />;
    case "van":
      return <VanMesh />;
    case "fridge":
      return <FridgeMesh />;
    case "washer":
      return <WasherMesh />;
    case "tv":
      return <TvMesh />;
    case "sofa":
      return <SofaMesh tint={tint} />;
    case "cannon":
      return <CannonMesh />;
    case "barrel":
      return <BarrelMesh />;
    case "crate":
      return <CrateMesh tint={tint} />;
    case "cone":
      return <ConeMesh />;
    case "chair":
      return <ChairMesh />;
    case "tire":
      return <TireMesh />;
    case "microwave":
      return <MicrowaveMesh />;
    case "dumpster":
      return <DumpsterMesh />;
    case "piano":
      return <PianoMesh />;
    case "ball":
      return <BallMesh />;
    default:
      return <ShapeMesh kind={kind} tint={tint} />;
  }
}

function SolidCollider({ def, restitution }: { def: ItemDef; restitution: number }) {
  const common = { friction: def.friction, restitution, mass: def.mass };
  const c = def.collider;
  if (c.shape === "cuboid") return <CuboidCollider args={c.args} {...common} />;
  if (c.shape === "ball") return <BallCollider args={c.args} {...common} />;
  if (c.shape === "cylinder") return <CylinderCollider args={c.args} rotation={c.rotation} {...common} />;
  if (c.shape === "capsule") return <CapsuleCollider args={c.args} {...common} />;
  return <ConeCollider args={c.args} {...common} />;
}

function DynBody({ body, restitution }: { body: SimBody; restitution: number }) {
  const def = CATALOG[body.kind];
  return (
    <RigidBody
      position={body.position}
      rotation={body.rotation}
      colliders={false}
      ccd
      softCcdPrediction={0.22}
      linearDamping={0.08}
      angularDamping={0.28}
      additionalSolverIterations={3}
      userData={body.meta}
      canSleep
    >
      <SolidCollider def={def} restitution={restitution} />
      <PropMesh kind={body.kind} tint={body.tint} />
    </RigidBody>
  );
}

export const Dyn = memo(DynBody, (a, b) => a.body === b.body && a.restitution === b.restitution);
