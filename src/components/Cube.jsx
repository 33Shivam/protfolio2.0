import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import { BoxBufferGeometry } from "three";

const Cube = () => {
  const textRef = useRef();

  // Use React Spring's useSpring hook to define the animation
  const { position } = useSpring({
    from: { position: [0, 0, 0] },
    to: { position: [Math.sin(Math.PI * 2), 0, 0] },
    loop: true,
    config: { duration: 7000 },
  });

  return (
    <animated.mesh position={position}>
      <boxBufferGeometry  args={[1, 1, 1, 2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#70cdc1"]} />
          <Text ref={textRef} fontSize={2} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </animated.mesh>
  );
};

export default Cube;
