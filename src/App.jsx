import { useState } from "react"
import Header from "./components/Header"
import IconNewExpense from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal"
import { generateId }from "./helpers/index"

function App() {
  
  const[budget, setBudget]=useState(0)
  const[isValidBudget, setIsValidBudget]=useState(false)
  const[modal,setModal]=useState(false)
  const[animateModal, setAnimateModal]=useState(false)
  const[expenses, setExpenses]=useState([])

  const handleNewExpense=()=>{
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 250);
  }
  const saveExpense=(newExpense)=>{
    newExpense.id = generateId()
    setExpenses([...expenses, newExpense])
      setTimeout(() => {
          setModal(false)
        }, 500);
      setAnimateModal(false)  
  
  }
    
  return (
      <div>
        <Header
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
        />

        {isValidBudget && (
          <div className="nuevo-gasto">
            <img src={IconNewExpense} alt="icon new expense" onClick={handleNewExpense}/>
          </div>
        )}

        {modal &&(
          <Modal
            setModal={setModal}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
            saveExpense={saveExpense}
          />)}

      </div> 
  )
}

export default App
