const Inputfile =() => {
  
 const upload =(e) => {
  Inputfile.current.click();
   }
    return (
      <div className="App">
        <h5>INPUT FILES IN REACT JS !</h5>
            <input type= "file" onClick= {(e)=>upload(e)} name="img"/>
      </div>
    );
   
}
   export default Inputfile;    