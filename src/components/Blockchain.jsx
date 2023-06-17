import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "three";
import Eth from "./Eth";
const Blockchain = () => {
    return (     
    <Canvas>
    <PerspectiveCamera position={[0, 0, 5]} />
    <Suspense fallback={null}>
        <Eth/>
    </Suspense>
    <OrbitControls enableZoom={false} autoRotate />
    <directionalLight intensity={1} position={[1, 1, 1]} />
  </Canvas>
    );
};

export default Blockchain;