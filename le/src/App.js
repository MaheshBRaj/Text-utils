import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import AboutUs from './components/AboutUs';



function App() {
  const  [mode,setDMode] =useState('light');   //wether the dark mode is on or not
  const  [alert,setAlert]= useState(null);

  const showAlert=()=>{
  console.log("showalert");

  
  }


 const togglemode=()=>{
  if(mode ==='light'){
  setDMode('dark')
  document.body.style.backgroundColor ='#042743';
  showAlert("Dark mode has been enabled", "success");
  }
  else{
    setDMode('light')
    document.body.style.backgroundColor ='white';
    showAlert("light mode has been enabled", "success");
  }
}
  return (
   <>

{/* <Navbar title="textUtils" AboutText="AboutTextUtils" /> */}
<Navbar   title="textUtils" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container">
<TextForm heading ="Enter the txt to analyze" mode={mode} />
{/* <AboutUs/> */}

</div>

   </>
  );
}

export default App;
