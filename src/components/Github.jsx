import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "three";
import Gitlogo from "./Gitlogo";

const Github = () => {
  return (
    <Canvas>
      <PerspectiveCamera position={[0, 0, 5]} />
      <Suspense fallback={null}>
        <Gitlogo />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate={false} />
      <directionalLight intensity={1} position={[1, 1, 1]} />
    </Canvas>
  );
};

export default Github;
