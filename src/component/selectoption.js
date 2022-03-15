import React, {useState} from "react";

const Selectoption = () => {
  const [option, setoption] = useState();
  const handleChange = (e) => {
    setoption(e.target.value)
  }
  console.log(option)
    return (
        <div className="App">
         <h5>SELECT LANGUAGE</h5>
        <input type="text" name="education" id="education" placeholder="select your Education"/>  
           
          <select className="custom-select" value={option}  onChange={handleChange}>
            <option value="java">java</option>
            <option value="react">react</option>
            <option value="C++">C++</option>
            <option value="javascript">javascript</option>
            <option value="python">python</option>
          </select>
         
        </div>  
      );
}
export default Selectoption;