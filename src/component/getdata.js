import { useState } from "react";


const GetData = () => {
    const [data, setData] = useState();
    const handleChange = (e) => {
        setData(e.target.value)
}
    console.log(data)
    return (
        <div className="App">
           <h5>TYPE YOUR NAME</h5> 
           <input type= "text" value={data} onChange={handleChange}/>
        </div>
    );
};
export default GetData; 