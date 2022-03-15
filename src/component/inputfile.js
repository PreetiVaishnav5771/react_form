import { useState } from "react";

const Inputfile =() => {
  const [file, setFile] = useState();
 const upload =(e) => {  
  Inputfile.current.click();
  setFile(e.target.Inputfile)
   }
   console.log(file)

    return (
      <div className="App">
        <h5>INPUT FILES IN REACT JS !</h5>
            <input type= "file" Inputfile= {file} onClick= {(e)=>upload(e)} name="img"/>
      </div>
    );
   
}
   export default Inputfile;    