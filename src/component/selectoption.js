const selectoption = () => {
    return (
        <div className="container p-5">
          <select cleasName= "custom-select" onchange= {(e)=>{
            const selectedlanguage = e.target.value;
            setlanguagestate (selectedlanguage);
          }}>
            <option value="java">java</option>
            <option value="react">react</option>
            <option value="C++"></option>
            <option value="javascript">javascript</option>
            <option value="python">python</option>
          </select>
          {languagestate}
        </div>
      );
      export default selectoption;
}