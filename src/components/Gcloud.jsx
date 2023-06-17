import React , { Suspense }  from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Google from "./Google";

const Gcloud = () => {
  return (
  <>
    <Canvas>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Google />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
    </>

  );
};

export default Gcloud;
