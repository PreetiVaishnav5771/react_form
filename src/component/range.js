const App=()=> {
    const [val,steval]=usestate([0,50])
    const updateval=(e,item)=>{
      steval(item)
    }
    return (
      <div className="App">
        <h1> react material UI / range slider</h1>
        <div stuyle = {{width:300 margin:30}}>
          <slider
          value={val}
          onchange={updateval}
          />
        </div>
      </div>
    );
  }

  export default App;   