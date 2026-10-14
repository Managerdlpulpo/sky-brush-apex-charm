import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Chrome } from "./hud";
import { Scene } from "./sim";

export function Sandbox() {
  return (
    <div className="stage">
      <Canvas
        className="view"
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [6.4, 4.3, 13.4], fov: 40, near: 0.2, far: 280 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.06,
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Chrome />
    </div>
  );
}
