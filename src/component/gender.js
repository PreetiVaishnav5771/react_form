import { useState } from "react";

const Gender= () => {
  const [gender, setgender] = useState();
     const handleClick = (e) => {
      setgender(e.target.value)
   }
   console.log(gender)
   
    return (
      <div className="App">
        <h5>SELECT YOUR GENDER</h5>
        <input type="radio" name="gender" value="male" onClick={handleClick}/> Male
        <input type="radio" name="gender" value="female" onClick={handleClick}/> Female
      </div>
    );
  }
  export default Gender; 