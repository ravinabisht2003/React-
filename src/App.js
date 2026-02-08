
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




  return (

    <>
     <Navbar title="Abc" aboutTitle="AboutUs" mode={mode} toggleMode ={toggleMode} />
     <Alert alert={alert}/>

     <Textform heading = "Heading" mode={mode} showAlert={showAlert}/>
     {/* <About/> */}
    
     
    </>
  );
}

export default App;
