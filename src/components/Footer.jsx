import React from 'react';
import styled from "styled-components";
import SocialFacebook from './SocialFacebook';
import SocialTwitter from './SocialTwitter';
import SocialGithub from './SocialGithub';
import SocialLinkdin from './SocialLinkdin';

const Section = styled.div`
display: flex;
justify-content: center;
scroll-snap-align: center;
background-color: #252424eb;
padding: 0; 

`

const Container = styled.div`

display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;

`

const Socials = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;`
;

const SocialList = styled.div`
display: flex;
margin: auto;
cursor: pointer;
/* background-color: #000000; */
`;


const Note = styled.h6`
display: flex;
font-size: 16px;
font-family:"Century Gothic";

font-weight: 100;
color: #ffffff;
transform: translate(-10%, -50%);`;




const Footer = () => {
    return (
        <Section>
            <Container>
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
              </Socials>
              <Note>© 2023 Shivam Anand. Hosted on Digital Ocean </Note>  
            </Container>
        </Section>
            );
};

export default Footer;