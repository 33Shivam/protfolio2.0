import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import { BoxBufferGeometry } from "three";
import { Suspense } from "react";
import { OrbitControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "three";
import { FaReact } from 'react-icons/fa';
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import icon from "./3Dassets/Github.jpg";



// function Foo() {
//     const texture = useTexture(fa)
//   }

const SocialGithub = () => {
  const textRef = useRef();
  const texture = useLoader(TextureLoader, icon);


  const handleClick = () => {
    // Replace the URL with your LinkedIn profile URL
    window.open('https://github.com/33Shivam', '_blank');
  };


  // Use React Spring's useSpring hook to define the animation
  const { position } = useSpring({
    from: { position: [0, 0, 0] },
    to: { position: [Math.sin(Math.PI * 2), 0, 0] },
    loop: true,
    config: { duration: 7000 },
  });

  return (



<Canvas camera={{ position: [0, 0, 10] }} onClick={handleClick}>
<PerspectiveCamera makeDefault position={[5, 5, 5]} />
        <Suspense fallback={null}>
        <ambientLight intensity={0.5}/>
        <directionalLight intensity={1} position={[3, 2, 1]} />

        <animated.mesh position={position} scale={2}>
      <boxBufferGeometry  args={[1, 1, 1, 2, 2, 2]} />
      <meshStandardMaterial map={texture}>
        {/* <RenderTexture attach="map">
        <directionalLight intensity={1} position={[1,0 , 0]} />
        <ambientLight intensity={0.5}/>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#70cdc1"]} />
          <Text ref={textRef} fontSize={5} color="#0d0d0d" >
            hello
          </Text>
        </RenderTexture> */}
      </meshStandardMaterial>
    </animated.mesh>
     <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    
  );
};


export default SocialGithub;