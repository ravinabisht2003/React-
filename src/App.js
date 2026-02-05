
import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = ()=>{
    if (mode === 'dark'){
      setMode('light');
    }else{
      setMode('dark')
    }
  };


  return (

    <>
     <Navbar title="Abc" aboutTitle="AboutUs" mode={mode} toggleMode ={toggleMode} />

     <Textform heading = "Heading"/>
     {/* <About/> */}

     
    </>
  );
}

export default App;
