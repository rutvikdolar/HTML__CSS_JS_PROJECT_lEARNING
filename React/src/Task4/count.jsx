import { useState } from "react"

export const Count =()=>{

const [count,setCount] = useState(0)


const add = ()=>{
setCount(count + 1)
}
const De = () =>{
    setCount(count - 1)
}


const remove = () => {
    setCount(0)
}

return(
<div>
    <h1>{count}</h1>
    <button onClick={add}>+</button>
    <button onClick={De}>-</button>
    <button onClick={remove}>Remove</button>
</div>
)
}

