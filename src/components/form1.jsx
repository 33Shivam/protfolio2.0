import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components'; 





const Backdrop = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000000e1;
display: flex;
align-items: center;
justify-content: center;
z-index: 1;

`;

const Section = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  `;


const Title = styled(motion.h1)`
font-weight: lighter;
font-family: "Century Gothic";
color: #ffffff;
`

const Form = styled(motion.form)`
width:500px;
display: flex;
flex-direction: column;
gap: 20px;
`


const Input = styled(motion.input)`
padding: 20px;
background-color: #dfdbdb;
border: none;
border-radius: 5px;
font-family: "Century Gothic";
`

const TextArea = styled(motion.textarea)`
padding: 20px;
background-color: #dfdbdb;
border: none;
border-radius: 5px;
font-family: "Century Gothic";
`

const Button = styled(motion.button)`
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
    
  }


`



const form1 = () => {
    return (
        <Backdrop>
        <Section>
    <Form initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} >
                      <Title>Hire Me!</Title>
                          <Input placeholder='Name'></Input>
                          <Input placeholder='Email'></Input>
                          <TextArea placeholder='Hey we would love to have you on our team' rows={10}></TextArea>
                          <Button>Send</Button>
                      </Form>
                      </Section>
                      </Backdrop>
                  
    );
};
console.log("Form1");


export default form1;