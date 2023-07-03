import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Works from './components/Works'
import Hero from './components/Hero'
import Who from './components/Who'
import Contact from './components/Contact'
import styled from 'styled-components';
import Footer from './components/Footer'

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
color: white; 
background-image: url('./images/background.png');
scrollbar-width: 0;
&::-webkit-scrollbar {
  display: none;}
`

function App() {
  return (
  <Container>
     <Hero />
    <Who />
    <Works />   
    {/* <Contact />   */}
    <Footer />
  </Container>
  )
}

export default App
