import { useState } from "react";
import IconClose from "../img/cerrar.svg"
import Message from "./Message"


const Modal =({setModal, animateModal,setAnimateModal,saveExpense})=>{

    const[name, setName]=useState('')
    const[amount, setAmount]=useState('')
    const [category, setCategory]=useState('')
    const[message,setMessage]=useState('')

    const hideModal=()=>{
        setTimeout(() => {
            setModal(false)
          }, 500);
        setAnimateModal(false)  
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if([name, amount, category].includes('')){
            setMessage('All fields are required')
            setTimeout(() => {
                setMessage('')
            }, 3000);
            return
        }
        saveExpense({name, amount, category})
    }

    return(
        <div className="modal">
            <div className="cerrar-modal">
                <img src={IconClose} alt="close" onClick={hideModal}/>
            </div>
            <form 
            onSubmit={handleSubmit}
            className={`formulario ${animateModal ? "animar" : 'cerrar'}`}>
                <legend>New Expense</legend>
                {message && <Message type="error">{message}</Message>}
                <div className="campo">
                    <label htmlFor="name">Expense Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Add the name of the expense"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        placeholder="Add the amount of the expense ej: 100.50"
                        value={amount}
                        onChange={e=>setAmount(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="category">Category</label>
                    <select 
                        id="category"
                        value={category}
                        onChange={e=>setCategory(e.target.value)}
                    >
                        <option value="">--Select--</option>
                        <option value="savings">Savings</option>
                        <option value="groceries">Groceries</option>
                        <option value="household">Household</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="subscription">subscription</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <input type="submit" value="Add Expense" />
            </form>
        </div>
    )
}
export default Modal