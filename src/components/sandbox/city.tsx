import { useMemo } from "react";
import { CapsuleCollider, CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { ROOF, SHOP, facadeTexture } from "./textures";

type Block = {
  x: number;
  z: number;
  w: number;
  d: number;
  h: number;
  style: number;
};

const BLOCKS: Block[] = [
  { x: -18, z: -14, w: 10, d: 12, h: 15, style: 0 },
  { x: -17.5, z: 0.5, w: 9, d: 12, h: 11, style: 2 },
  { x: -19, z: 15, w: 11, d: 10, h: 20, style: 1 },
  { x: -20, z: -28, w: 12, d: 10, h: 26, style: 4 },
  { x: 18.5, z: -10, w: 9, d: 14, h: 13, style: 5 },
  { x: 18, z: 6.5, w: 10, d: 12, h: 17, style: 0 },
  { x: 20, z: 20, w: 12, d: 9, h: 23, style: 3 },
  { x: 19, z: -26, w: 10, d: 10, h: 19, style: 1 },
  { x: -16, z: -40, w: 14, d: 8, h: 34, style: 3 },
  { x: 17, z: -42, w: 16, d: 8, h: 28, style: 4 },
];

const LAMPS: Array<[number, number]> = [];
for (let z = -24; z <= 18; z += 8) {
  LAMPS.push([-7.7, z], [7.7, z]);
}

function Building({ block }: { block: Block }) {
  const map = useMemo(() => {
    const tex = facadeTexture(block.style).clone();
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(Math.max(1, block.w / 3.2), Math.max(1, block.h / 3.4));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  }, [block.style, block.w, block.h]);
  const roof = ROOF[block.style % ROOF.length] ?? "#6a6660";
  const shop = SHOP[block.style % SHOP.length] ?? "#2e3338";
  const face = block.x > 0 ? -1 : 1;
  const faceX = face * (block.w / 2 + 0.04);
  return (
    <group position={[block.x, 0, block.z]}>
      <mesh position={[0, block.h / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[block.w, block.h, block.d]} />
        <meshStandardMaterial map={map} color="#ffffff" roughness={0.86} metalness={0.02} />
      </mesh>
      <mesh position={[0, 1.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[block.w + 0.08, 3.1, block.d + 0.08]} />
        <meshStandardMaterial color={shop} roughness={0.9} />
      </mesh>
      <mesh position={[0, block.h + 0.16, 0]} castShadow>
        <boxGeometry args={[block.w + 0.35, 0.32, block.d + 0.35]} />
        <meshStandardMaterial color={roof} roughness={0.8} />
      </mesh>
      <mesh position={[faceX, 1.15, 0]} castShadow>
        <boxGeometry args={[0.08, 2.15, 1.15]} />
        <meshStandardMaterial color="#241f1c" roughness={0.7} />
      </mesh>
      {block.style % 2 === 0 ? (
        <mesh position={[faceX * 0.15, 2.55, 0]} castShadow>
          <boxGeometry args={[block.w * 0.55, 0.08, 0.7]} />
          <meshStandardMaterial color="#c4b8a6" roughness={0.75} />
        </mesh>
      ) : null}
      {block.h > 14 ? (
        <mesh position={[block.w * 0.22, block.h + 0.48, block.d * 0.12]} castShadow>
          <boxGeometry args={[0.85, 0.38, 0.7]} />
          <meshStandardMaterial color="#9aa0a4" roughness={0.5} metalness={0.25} />
        </mesh>
      ) : null}
    </group>
  );
}

function Ground() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[110, 110]} />
        <meshStandardMaterial color="#c9c3b7" roughness={0.96} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.004, -4]} receiveShadow>
        <planeGeometry args={[9.2, 86]} />
        <meshStandardMaterial color="#3a3e42" roughness={0.92} polygonOffset polygonOffsetFactor={-1} polygonOffsetUnits={-1} />
      </mesh>
      {[-1, 1].map((side) => (
        <mesh key={side} rotation={[-Math.PI / 2, 0, 0]} position={[side * 8.55, 0.006, -4]} receiveShadow>
          <planeGeometry args={[6.4, 86]} />
          <meshStandardMaterial color="#d4cfc4" roughness={0.94} polygonOffset polygonOffsetFactor={-2} polygonOffsetUnits={-2} />
        </mesh>
      ))}
      {[-1, 1].map((side) => (
        <mesh key={`gutter-${side}`} rotation={[-Math.PI / 2, 0, 0]} position={[side * 4.7, 0.008, -4]}>
          <planeGeometry args={[0.12, 86]} />
          <meshStandardMaterial color="#2c3034" roughness={0.9} polygonOffset polygonOffsetFactor={-3} polygonOffsetUnits={-3} />
        </mesh>
      ))}
      {Array.from({ length: 18 }, (_, i) => (
        <mesh key={`dash-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -32 + i * 3.6]}>
          <planeGeometry args={[0.14, 1.5]} />
          <meshStandardMaterial color="#e6e2d8" roughness={0.6} polygonOffset polygonOffsetFactor={-4} polygonOffsetUnits={-4} />
        </mesh>
      ))}
      {Array.from({ length: 7 }, (_, i) => (
        <mesh key={`walk-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[-3.6 + i * 1.2, 0.01, 0.2]}>
          <planeGeometry args={[0.55, 3.1]} />
          <meshStandardMaterial color="#e7e3d9" roughness={0.62} polygonOffset polygonOffsetFactor={-4} polygonOffsetUnits={-4} />
        </mesh>
      ))}
    </group>
  );
}

function Lamp({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 2.15, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.09, 4.3, 8]} />
        <meshStandardMaterial color="#3a3f44" roughness={0.45} metalness={0.45} />
      </mesh>
      <mesh position={[0.35, 4.2, 0]} castShadow>
        <boxGeometry args={[0.9, 0.08, 0.18]} />
        <meshStandardMaterial color="#3a3f44" metalness={0.45} roughness={0.45} />
      </mesh>
      <mesh position={[0.7, 4.05, 0]}>
        <boxGeometry args={[0.28, 0.12, 0.22]} />
        <meshStandardMaterial color="#f4efe2" emissive="#f0e2c0" emissiveIntensity={0.18} roughness={0.4} />
      </mesh>
    </group>
  );
}

function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 1.05, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.16, 2.1, 8]} />
        <meshStandardMaterial color="#5c4636" roughness={0.9} />
      </mesh>
      <mesh position={[0, 2.45, 0]} castShadow>
        <sphereGeometry args={[0.95, 16, 12]} />
        <meshStandardMaterial color="#3f5344" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Person({ position, color, yaw }: { position: [number, number, number]; color: string; yaw: number }) {
  return (
    <group position={position} rotation={[0, yaw, 0]}>
      <mesh position={[0, 0.72, 0]} castShadow>
        <capsuleGeometry args={[0.18, 0.62, 4, 8]} />
        <meshStandardMaterial color={color} roughness={0.82} />
      </mesh>
      <mesh position={[0, 1.28, 0]} castShadow>
        <sphereGeometry args={[0.15, 14, 10]} />
        <meshStandardMaterial color="#c4a48a" roughness={0.72} />
      </mesh>
    </group>
  );
}

function Shelter() {
  return (
    <group position={[8.9, 0, 3.4]}>
      {[-1.2, 1.2].map((z) => (
        <mesh key={z} position={[0, 1.25, z]} castShadow>
          <boxGeometry args={[0.08, 2.5, 0.08]} />
          <meshStandardMaterial color="#3a3f44" metalness={0.4} roughness={0.45} />
        </mesh>
      ))}
      <mesh position={[0, 2.52, 0]} castShadow>
        <boxGeometry args={[1.5, 0.08, 2.8]} />
        <meshStandardMaterial color="#5c6166" metalness={0.35} roughness={0.4} />
      </mesh>
      <mesh position={[0, 1.35, -1.25]}>
        <boxGeometry args={[0.04, 1.5, 2.2]} />
        <meshStandardMaterial color="#c5d3dc" transparent opacity={0.35} roughness={0.1} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.42, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.08, 1.4]} />
        <meshStandardMaterial color="#6e6256" roughness={0.8} />
      </mesh>
    </group>
  );
}

export function City({ restitution }: { restitution: number }) {
  return (
    <group>
      <Ground />
      {BLOCKS.map((block) => (
        <Building key={`${block.x}-${block.z}`} block={block} />
      ))}
      {LAMPS.map(([x, z]) => (
        <Lamp key={`${x}-${z}`} position={[x, 0, z]} />
      ))}
      <Tree position={[-9.5, 0, -11]} />
      <Tree position={[9.4, 0, 12]} />
      <Tree position={[-9.3, 0, 15.5]} />
      <Tree position={[9.6, 0, -15]} />
      <Shelter />
      <Person position={[6.5, 0, 0.6]} color="#3d4c5c" yaw={-0.6} />
      <Person position={[-6.6, 0, -0.4]} color="#6b5344" yaw={0.8} />
      <Person position={[6.2, 0, 4.8]} color="#4d5948" yaw={2.4} />
      <RigidBody type="fixed" colliders={false} friction={0.98} restitution={restitution}>
        <CuboidCollider args={[55, 0.5, 55]} position={[0, -0.5, 0]} friction={0.98} restitution={restitution} />
        {BLOCKS.map((block) => (
          <CuboidCollider
            key={`c-${block.x}-${block.z}`}
            args={[block.w / 2, (block.h + 0.3) / 2, block.d / 2]}
            position={[block.x, (block.h + 0.3) / 2, block.z]}
            friction={0.8}
            restitution={restitution}
          />
        ))}
        {LAMPS.map(([x, z]) => (
          <CylinderCollider key={`l-${x}-${z}`} args={[2.15, 0.09]} position={[x, 2.15, z]} friction={0.6} restitution={restitution} />
        ))}
        {[
          [-9.5, -11],
          [9.4, 12],
          [-9.3, 15.5],
          [9.6, -15],
        ].map(([x, z]) => (
          <CylinderCollider key={`t-${x}-${z}`} args={[1.05, 0.16]} position={[x, 1.05, z]} friction={0.7} restitution={restitution} />
        ))}
        <CapsuleCollider args={[0.32, 0.2]} position={[6.5, 0.7, 0.6]} friction={0.6} restitution={restitution} />
        <CapsuleCollider args={[0.32, 0.2]} position={[-6.6, 0.7, -0.4]} friction={0.6} restitution={restitution} />
        <CapsuleCollider args={[0.32, 0.2]} position={[6.2, 0.7, 4.8]} friction={0.6} restitution={restitution} />
        <CuboidCollider args={[0.75, 1.3, 0.12]} position={[8.9, 1.3, 2.15]} friction={0.5} restitution={restitution} />
        <CuboidCollider args={[0.7, 0.08, 1.35]} position={[8.9, 2.52, 3.4]} friction={0.6} restitution={restitution} />
      </RigidBody>
    </group>
  );
}
