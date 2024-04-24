import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Box1 from './components/Box1'
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Icons from './components/Icons';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <>
      <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen}/>

       <div style={{ backgroundColor: 'rgb(244, 246, 246)' }}>
        <br />
      <Box1/>
      <Box2/>
      <Box3/>
      <Icons/>
      </div> 

    </>
  );
}

export default App;
