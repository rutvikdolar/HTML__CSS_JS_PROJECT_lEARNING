import { Clide } from "./Clide"
import { Clide1 } from "./Clide1"
import { Clide3 } from "./Clidre3"

export const Prent =()=>{

const user = "Rutvik"
const sname = "Dolar"
const email = "rutvikDolar@gmail.com"
return(
    <div>
    <h1>Prent</h1>
    <Clide user={user}/>
    <Clide1 sname = {sname}></Clide1>
    <Clide3 email={email}></Clide3>
    </div>
    
)

}