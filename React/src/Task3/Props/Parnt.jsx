import { Clide1 } from "./clide1"
import { Clide2 } from "./clide2"

export function Parnt() {

    let user = "Rutvik"
    let sname = "dolar"
    return(
        <div>
        <Clide1 user={user}/>
         <Clide2 sname={sname}/>
        </div>
    )
}

