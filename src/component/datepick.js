
const datepick = () => {
    const [date,setdate].usestate();
    console.log ("date", date);
    return (
      <div className="App">
        <h1>select date</h1>
        <input type= "date" onchange= {e => setdate(e.target.value)}/>
        
      </div>
    );
  }

  export default datepick;