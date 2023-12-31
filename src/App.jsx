import { useState } from "react";
function App(){
    const[data,setdata]=useState("olive");
    const obj={
        height:"100vh",
        width:"100vw",
        backgroundColor:data
    }
    return(
        <div style={obj}>
            <button onClick={()=>setdata("red")}>red</button>
            <button onClick={()=>setdata("blue")}>blue</button>
            <button onClick={()=>setdata("green")}>green</button>
            <button onClick={()=>setdata("pink")}>pink</button>
        </div>
    )
}
export default App;