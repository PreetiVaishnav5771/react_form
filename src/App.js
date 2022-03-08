import logo from './logo.svg';
import './App.css';
import Getdata from './Getdate'
import Inputfile from './Inputfile' 
import Datepick from './Datepick'
import Selectoption from './ Slectoption'
import Gender from './Gender'
import Range from './Range'
import React {usestate}from './React'

function App = () => {
  const [data,setdata]=usestate(null)
  function getData(val){
    setdata(val.target.value)
  }  return (
    <div className="App">
      <h1>Get input box value!</h1>
      <input type= "text" onchange= {getdata}/>

      <h1>Input file in react js !</h1>
      <input type= "file" onchange= {(e)=>this.upload(e) } name="img"/> 
      
        <h1>select date</h1>
        <input type= "date" onchange= {e => setdate(e.target.value)}/>

        <select cleasName= "custom-select" onchange= {(e)=>{
            const selectedlanguage = e.target.value;
            setlanguagestate (selectedlanguage);
          }}>
            <option value="java">java</option>
            <option value="react">react</option>
            <option value="C++"></option>
            <option value="javascript">javascript</option>
            <option value="python">python</option>
          </select>
          {languagestate}
    
          <h1>Select Gender</h1>
        <input type="radio" name="gender" value="male" onchenge={e=> setgender(e.target.value)}/> Male
        <input type="radio" name="gender" value="female" onchenge={e=> setgender(e.target.value)}/> Female

        <h1> react material UI / range slider</h1>
        <div stuyle = {{width:300 margin:30}}>
          <slider
          value={val}
          onchange={updateval}
          />
  );
}

export default App;
