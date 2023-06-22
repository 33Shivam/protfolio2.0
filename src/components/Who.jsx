import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { motion } from "framer-motion"; 

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: space-between;
width: 1400px;
`;

const Left = styled.div`
position: relative;
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 5px;
padding-left: 64px;
/* background-color: red;   */
`;

const Right = styled(motion.div)`
flex: 2;
justify-content : center;
position: relative;
margin:auto;
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
const Desc = styled.h6`
font-size: 16px;    
font-family:"Century Gothic";
font-weight: 100;  
line-height: 1.5; 

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


const Img = styled.img`
width: 600px;
height: 600px;  
position: absolute;
object-fit: contain;
right: 0;
top: 0;
left: 0;
bottom: 0;
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
margin: 20px 0px;`;

const T2 = styled.h2`
font-size: 48px;
text-transform: uppercase;
font-family:"Century Gothic";
font-weight: 800;
margin: 20px 0px;
color: #17e1a4;`;

const Who = () => {


    
    return (
        <Section>
            <Container>
            <Left>
            <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate/>
            </Suspense>
          </Canvas>
            </Left>
            <Right initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>  
                <Hello >Projects</Hello>
                <Title>
                    <T1>My way to</T1>
                    <T2>Perfection</T2>
                </Title>
                <Desc>With React, I excel in creating captivating and user-friendly interfaces for web applications. 
                  My experience with Solidity allows me to develop secure and transparent decentralized applications 
                  using Ethereum smart contracts. Leveraging the power of Google Cloud Platform, I can deploy and
                   manage applications with ease, ensuring seamless scalability and optimal performance. With Git, I maintain efficient version control and collaboration, 
                  while my proficiency in SQL empowers me to design and optimize databases for efficient data management</Desc>
                <Button whileHover={{scale:1.05}}  whileTap={{scale:0.95}}>See Projects</Button>
            </Right>
            </Container>
        </Section>
    );
};

export default Who;