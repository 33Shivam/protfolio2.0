import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styled from "styled-components";



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

const Top = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 5px;
padding-left: 12px;
background-color: red;  
`;


const Bottom = styled.div`
flex: 3;
justify-content : center;
position: relative;
background-color: aliceblue;
`;


const Footer = () => {
    return (
        <Section>
            <Container>
                <Grid container spacing={2}>

                </Grid>
            </Container>
        </Section>
            );
};

export default Footer;