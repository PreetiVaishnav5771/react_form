import { useState } from "react";

const Datepick = () => {
  const [date, setDate] = useState();
  const handleSubmit = (e) => {
    setDate(e.target.value)
  }
  console.log(date)
    return (
      <div className="App">
        <h5>SELECT DATE</h5>
        <input type= "date" value= {date} onSubmit={handleSubmit}/>
      </div> 
      
    );
  }

  export default Datepick;