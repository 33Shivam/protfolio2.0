import React from 'react';
import styled from 'styled-components';
import Map from './Map';


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 50px;
`

const Left = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: column;
`

const Title = styled.h1`
font-weight: lighter;
font-family: "Century Gothic";
`

const Form = styled.form`
width:500px;
display: flex;
flex-direction: column;
gap: 20px;
`


const Input = styled.input`
padding: 20px;
background-color: #dfdbdb;
border: none;
border-radius: 5px;
font-family: "Century Gothic";
`

const TextArea = styled.textarea`
padding: 20px;
background-color: #dfdbdb;
border: none;
border-radius: 5px;
font-family: "Century Gothic";
`

const Button = styled.button`
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

const Right = styled.div`
flex: 1;    
`






const Contact = () => {
    return (
        <Section>
            <Container>
                <Left>                    
                    <Map/>
                </Left>
                <Right>
                <Form>
                    <Title>Contact Us</Title>
                        <Input placeholder='Name'></Input>
                        <Input placeholder='Email'></Input>
                        <TextArea placeholder='Write Your Message' rows={10}></TextArea>
                        <Button>Send</Button>
                    </Form>
                </Right>
            </Container>
        </Section>
    );
};

export default Contact;