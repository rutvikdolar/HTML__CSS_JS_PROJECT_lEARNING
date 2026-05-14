// import { useState } from "react"

export function EventHandlling() {
    
// let [data,setData] = useState("")

let Sub = (e)=>{
e.preventDefault()
alert("Submit");

}

// function onClick() {
//     alert("Hello Rutvik")
// }
 return(
    // <div>
    // <button onClick={onClick}>Clike</button>
    // <input type="type" onChange={(e)=> setData(e.target.value)} placeholder="Enter Your Text"></input>
    //  <div>{data}</div>
    // </div>

   

    <div>
        <form onSubmit={Sub} >
        <label>Enter Your Name</label>
          <input type="name" placeholder="Enter Your Name"></input>
          <button type="submit">Submit</button>
          {/* <div>{data}</div>          */}
        </form>
    </div>
 ) 
}