
import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  };


  return (

    <>
     <Navbar title="Abc" aboutTitle="AboutUs" mode={mode} toggleMode ={toggleMode} />

     <Textform heading = "Heading" mode={mode}/>
     {/* <About/> */}

     
    </>
  );
}

export default App;
