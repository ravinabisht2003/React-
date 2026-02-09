
import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enable", "success");
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enable", "success");
    }
  };

 

  const toggleGreen = ()=>{
    if(mode === 'light'){
      setMode('green');
      document.body.style.backgroundColor = '#086433'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }




  return (

    <>
     <Navbar title="Abc" aboutTitle="AboutUs" mode={mode} toggleMode ={toggleMode} toggleGreen = {toggleGreen}/>
     <Alert alert={alert}/>

     <Textform heading = "Heading" mode={mode} showAlert={showAlert}/>
     {/* <About/> */}
    
     
    </>
  );
}

export default App;
