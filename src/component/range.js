import { useState } from "react";

const Range=()=> {
  const [range, setrange] = useState();
  const handleChange = (e) => {
    setrange(e.target.value)
  }
   console.log(range)

    return (
      <div className="App">
        <h5>RANGE SLIDER</h5>
        <div style = {{width:1800, margin:30}}>
      <input type= "range" id="rangebar" name="rangebar" min="0" max="100" value={range} onChange={handleChange}/>
        </div>
      </div>
    );
    
    }

  export default Range;