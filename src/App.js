import logo from './logo.svg';
import './App.css';
import Getdata from './component/getdata'
import React, {useState}from 'react'
import Gender from './component/gender'
import Datepick from './component/datepick';
import Inputfile from './component/inputfile';
import Selectoption from './component/selectoption'
import Range from './component/range';

const App = () => {
  const [data,setData] = useState({
    Inputfile:"",Getdata:"",Range:"",Selectoption:"",Gender:"",Datepick:""
  });
  
   return (
    <div className="App">
      
       <Getdata/>

       <Gender/>

       <Datepick/>

       <Inputfile/>

       <Selectoption/>

       <Range/>


    </div>
  );
}

export default App;
