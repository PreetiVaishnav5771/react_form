import { useState } from "react";

const Datepick = () => {
  const [date, setdate] = useState();
  const handleSubmit = (e) => {
    setdate(e.target.value)
  }
  console.log(date)

    return (
      <div className="App">
        <h5>SELECT DATE</h5>
        <input type= "date" value= {date} onChange={handleSubmit}/>
      </div> 
      
    );
  }

  export default Datepick;