import React from 'react';
import styled from 'styled-components';
import Java from './Java.jsx';
import Gcloud from './Gcloud.jsx';
import Blockchain from './Blockchain.jsx';
import Github from './Github.jsx';
import { useState } from "react";
import Development from './Development.jsx';
import WebDesign from './WebDesign.jsx';
import { motion } from 'framer-motion';
import SocialFacebook from './SocialFacebook.jsx';
import SocialTwitter from './SocialTwitter.jsx';
import SocialGithub from './SocialGithub.jsx';
import SocialLinkdin from './SocialLinkdin.jsx';


const data = [
"React",
"Web Design",
"Blockchain",
"Google Cloud",
"GitHub",
];


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`

const Container = styled.div`
width: 1400px;
display : flex; 
justify-content: space-between; 
flex-direction: column;
gap: 8px;
`

const Content = styled.div`
display: flex;
flex-grow: 2;
/* background-color: #b94848; */
`;


const Socials = styled.div`
display: flex;
flex-grow: 2;
background-color: #8e93931e;
flex-direction: row;
padding-left: 10%;
padding-right: 20%;
justify-content: space-between;`;

const SocialList = styled.div`
display: flex;
margin: auto;
cursor: pointer;
/* background-color: #000000; */
`;





const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`

const ListItem = styled(motion.li)`
font-size: 72px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px #fff;
font-family:"Century Gothic";
position: relative;

&::after{
content: "${(props) => props.text}";
position: absolute;
top: 0;
left: 0;
color: #20c694;
width: 0;
white-space: nowrap;
overflow: hidden;
}

&:hover{
    -webkit-text-stroke: 1px transparent;

    &::after{
        animation: moveText 0.5s linear both;  

        @keyframes moveText {
        to{
        width: 100%;
    }
}

    }
}

`;

const Right = styled(motion.div)`
flex:1;
`

const Works = () => {
    const [work, setWork] = useState("React3d");
    return (
        <Section>
            <Container>
              <Content>
                <Left>
                <List>
            {data.map((item) => (
              <ListItem  initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}  key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
                </Left>
                <Right  initial={{scale:0}} whileInView={{scale:1}}  >
                {work === "React" ? (
            <Development />
          ) : work === "Web Design" ? (
            <WebDesign />
          ) : work === "Blockchain" ? (
            <Blockchain />
          ) : work === "Google Cloud" ? (
            <Gcloud />
          )  : work === "GitHub" ? (
            <Github />
          ) : (
            <Development />
          )}
                </Right>
              </Content>
{/* 
              <Socials >
                <SocialList>
                <SocialFacebook/>
                </SocialList>
                <SocialList>
                <SocialTwitter />
                </SocialList>
                <SocialList>
                <SocialGithub />
                </SocialList>
                <SocialList>
                <SocialLinkdin />
                </SocialList>
              </Socials> */}
            </Container>
        </Section>
    );
};

export default Works;