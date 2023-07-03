import React from 'react';
import styled from 'styled-components';
import { easeIn, motion } from 'framer-motion';
import { useState } from 'react';
import Form from './form';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';


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

const ListItem = styled(motion.li)`
cursor: pointer;
font-family:"Century Gothic";
border-radius: 14px;
padding:8px;


&:hover {
  background-color: #107758;
  transition: ease-in 0.3s;
}

`;


const Button = styled(motion.button)`
background-color: #13b484;
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (   

        <Section>
            <Container>
                <Links>
                <Logo src = './images/bgrem.png'/> 
                <List >
                <ListItem>Home</ListItem> 
                <ListItem onClick={handleOpen}> Contact</ListItem>
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Form/>
      </Modal>
                <ListItem>Works</ListItem> 
                <ListItem>Socials</ListItem> 
                </List>
                </Links>
                <Icons>
                    <Icon src = ''/>
                    <Button  whileHover={{ scale: 1.1 }}
                    whileTap={{scale:0.9}} >Hire Now</Button>    

                    
                </Icons>
            </Container>
           </Section>
    );
};

export default Navbar;