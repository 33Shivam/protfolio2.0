import React from 'react';
import styled from 'styled-components';


const Section = styled.div`
display: flex;
justify-content: center;

`
const Container = styled.div`
width: 1400px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Links = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;

const Icons = styled.div`
display: flex;
align-items: center;
gap: 20px;`;

const Icon = styled.img``;

const ListItem = styled.li`
cursor: pointer;
font-family:"Century Gothic";`;

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

`;

const List = styled.ul`
display: flex;
align-items: center;
gap: 20px;
list-style: none;
`;


const Logo = styled.img`
height: 100px;`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                <Logo src = './images/bgrem.png'/> 
                <List>
                <ListItem>Home</ListItem> 
                <ListItem>Contact</ListItem> 
                <ListItem>Works</ListItem> 
                <ListItem>Studio</ListItem> 
                </List>
                </Links>
                <Icons>
                    <Icon src = ''/>
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
           </Section>
    );
};

export default Navbar;