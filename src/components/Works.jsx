import React from 'react';
import styled from 'styled-components';
import Java from './Java.jsx';
import Gcloud from './Gcloud.jsx';
import Blockchain from './Blockchain.jsx';
import Github from './Github.jsx';
import { useState } from "react";
import Development from './Development.jsx';
import WebDesign from './WebDesign.jsx';


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
`

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

const ListItem = styled.li`
font-size: 74px;
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

const Right = styled.div`
flex:1;
`

const Works = () => {
    const [work, setWork] = useState("React3d");
    return (
        <Section>
            <Container>
                <Left>
                <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
                </Left>
                <Right>
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
            </Container>
        </Section>
    );
};

export default Works;