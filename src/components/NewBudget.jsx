import { useState } from "react"
import Message from "./Message"

const NewBudget =({budget, setBudget})=>{

    const[message, setMessage] = useState('')

    const handleBudget=(e)=>{

        e.preventDefault()

        if(!Number(budget) || Number(budget)< 0){
            setMessage('nope')
        }else{
            setMessage("okay")
        }
    }

    return(
        <div className="contenedor-presupuesto contenedor sombra">

            <form className="formulario" onSubmit={handleBudget}>
                <div className="campo">
                    <label>Insert Budget</label>
                    <input type="text"
                        className="nuevo-presupuesto"
                        placeholder="Add your Budget"
                        value={budget}
                        onChange={(e)=>setBudget(e.target.value)}
                    />
                </div>
                <input type="submit" value="Add"/>
                {message && <Message type="error">{message}</Message>}
            </form>
        </div>
    )
}
export default NewBudget