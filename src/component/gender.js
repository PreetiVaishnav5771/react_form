import { useState } from "react";

const Gender=()=> {
  const [gender, setGender] = useState();
     const handleClick = (e) => {
      setGender(e.target.value)
   }
   console.log(gender)
   
    return (
      <div className="App">
        <h5>SELECT YOUR GENDER</h5>
        <input type="radio" name="gender" value="male" value = {gender} onClick={handleClick}/> Male
        <input type="radio" name="gender" value="female" value = {gender} onClick={handleClick}/> Female
      </div>
    );
  }
  export default Gender; 