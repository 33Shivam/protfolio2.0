import React , { Suspense }  from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Google from "./Google";

const Gcloud = () => {
  return (
     <Canvas>
    <PerspectiveCamera position={[0, 0, 5]} />
    <Suspense fallback={null}>
        <Google/>
        
    </Suspense>
    <OrbitControls enableZoom={false} autoRotate={false} />
    <directionalLight intensity={1} position={[1, 1, 1]} />
  </Canvas>

  );
};

export default Gcloud;
