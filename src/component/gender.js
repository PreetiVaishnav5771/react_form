const Gender=()=> {
    const [gender, setgender]=usestate();
  
    return (
      <div className="App">
        <h1>Select Gender</h1>
        <input type="radio" name="gender" value="male" onchenge={e=> setgender(e.target.value)}/> Male
        <input type="radio" name="gender" value="female" onchenge={e=> setgender(e.target.value)}/> Female
      </div>
    );
  }
  export default Gender; 