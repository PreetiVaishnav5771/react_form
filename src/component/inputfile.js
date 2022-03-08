const Inputfile =() => {
    return (
      <div className="App">
        <h1>Input file in react js !</h1>
        <input type= "file" onchange= {(e)=>this.upload(e) } name="img"/>
      </div>
    );
   }

   export default Inputfile;    