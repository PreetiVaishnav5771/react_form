import { useState } from "react";

const Inputfile =() => {
  const [file, setfile] = useState();
 const upload =(e) => {  
  // setfile(e.target.files[0])
  console.log(e.target)
   }
   console.log(file)

    return (
      <div className="App">
        <h5>INPUT FILES IN REACT JS !</h5>
            <input type= "file" value={file} onClick= {upload}/>
      </div>
    );
   
}
   export default Inputfile;    