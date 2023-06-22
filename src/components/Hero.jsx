import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Typewriter from "typewriter-effect";
import { delay, motion } from "framer-motion";

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: space-between;
width: 1400px;
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 5px;
padding-left: 12px;
/* background-color: red;   */
`;

const Right = styled.div`
flex: 3;
justify-content : center;
position: relative;
/* background-color: yellow; */
`;

const Hello = styled.h1`
font-size: 74px;
white-space: nowrap;
font-weight: 800;
font-family:"Century Gothic";
margin: 0;
`;

const Title = styled.h2`
font-size: 48px;
white-space: nowrap;  
display: flex;
flex-direction: row;
gap: 10px;
margin: 0;
`;
const Desc = styled(motion.p)`
font-size: 16px;    
font-family:"Century Gothic";
font-weight: 100;
line-height : 1.75;
`;

const Button = styled(motion.button)`
width: 150px;
background-color: #17e1a4;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Century Gothic", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


  &:hover {
    background-color: #055c36;
    
  }`;


const Img = styled(motion.img)`
width: 475px;
height: 475px;  
position: absolute;
object-fit: contain;
right: 0;
top: 0;
left: 0;
bottom: 40px;
margin: auto;
border-radius: 1000px;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(10px);
    }}
`;


const T1 = styled.h2`
font-size: 48px;
font-family:"Century Gothic";
font-weight: 100;
margin: 0;`;

const T2 = styled.h2`
font-size: 48px;
text-transform: uppercase;
font-family:"Century Gothic";
font-weight: 800;
margin: 0;
color: #17e1a4;`;

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
            <Left>
                <Hello>Hello</Hello>
                <Title>
                    <T1>I am a</T1>
                    <T2> <Typewriter 
 
 onInit={(typewriter) => {
     typewriter
         .typeString("Student")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Web Developer")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Designer")         
         .start();
 }}
/></T2>
                </Title>
                <Desc initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}  > 
Welcome to my website! I'm Shivam Anand,
 a student currently pursuing my studies at Delhi Technological University (DTU).
  I am thrilled to have you here.</Desc>
                <Button initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01]
      }} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Download CV</Button>
            </Left>
            <Right>
            <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.85}>
                <MeshDistortMaterial
                  color="#06694f"
                  attach="material"
                  distort={0.3}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>  
                <Img initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} src='./images/pfp4.png'/>  
            </Right>
            </Container>
        </Section>
    );
};

export default Hero;