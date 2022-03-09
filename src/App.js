import logo from './logo.svg';
import './App.css';
import Getdata from './Getdate'
import Inputfile from './Inputfile' 
import Datepick from './Datepick'
import Selectoption from './ Slectoption'
import Gender from './Gender'
import Range from './Range'
import React, {usestate}from './React'

function App = () => {
  const [data,setdata]=usestate({
    Inputfile:"",Getdata:"",Range:"",Selectoption:"",Gender:"",Datepick:""
  });
  
  function getData(val){
    setdata(val.target.value)
  }  return (
    <div className="App">
      
       <Getdata/>

      <Inputfile/>
      
      <Datepick/>

      <Selectoption/>
    
      <Gender/>
      
      <App/>

    </div>
  );
}

export default App;
