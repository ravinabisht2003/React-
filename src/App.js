
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

  const [theme, setTheme] = useState({
  bg: 'light',
  mode: 'light'
});


  

  const [mode, setMode] = useState('light');

  const removeClassColor = ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

//   const toggleMode = (cls)=>{
//     removeClassColor();
//     if(cls=== 'primary' || cls === 'danger' || cls === 'success' || cls === 'warning'){
//      document.body.classList.add(`bg-${cls}`);

//       setTheme(prev => ({
//     ...prev,
//     bg: cls
//   }));

//   return;
// +

//     setTheme(prev => ({
//     ...prev,
//     bg: ''   // 🔥 RESET COLOR HERE
//   }));
  
     
     
//     }else if (mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743'
//       showAlert("Dark Mode Enable", "success");
//     }else{
//       setMode('light')
//       document.body.style.backgroundColor = 'white'
//       showAlert("Light Mode Enable", "success");
//     }

   
//   };

 

//   const toggleGreen = ()=>{
//     if(mode === 'light'){
//       setMode('green');
//       document.body.style.backgroundColor = '#086433'
//     }
//     else{
//       setMode('light')
//       document.body.style.backgroundColor = 'white'
//     }
//   }

const toggleMode = (cls) => {
  removeClassColor();

  // If color square clicked
  if (['primary', 'danger', 'success', 'warning'].includes(cls)) {
    document.body.classList.add(`bg-${cls}`);

    setTheme(prev => ({
      ...prev,
      bg: cls
    }));

    return;
  }

  // If switching light/dark mode
  setTheme(prev => ({
    ...prev,
    bg: ''   // 🔥 RESET COLOR HERE
  }));

  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode Enable", "success");
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Enable", "success");
  }
};




  return (

    <>
     <Navbar title="Abc" aboutTitle="AboutUs" mode={mode} toggleMode ={toggleMode} />
     <Alert alert={alert}/>

     <Textform heading = "Heading" mode={mode} showAlert={showAlert}  bgColor={theme.bg}/>
     {/* <About/> */}
    
     
    </>
  );
}

export default App;
