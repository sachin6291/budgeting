import { useEffect, useState } from "react"
import Header from "./components/Header"
import IconNewExpense from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal"
import { generateId }from "./helpers/index"
import ExpenseList from "./components/ExpenseList"

function App() {
  
  const[budget, setBudget]=useState(Number(localStorage.getItem('budget')) ?? 0)
  const[isValidBudget, setIsValidBudget]=useState(false)
  const[modal,setModal]=useState(false)
  const[animateModal, setAnimateModal]=useState(false)
  const[expenses, setExpenses]=useState([])
  const[editExpense, setEditExpense]=useState({})




  const handleNewExpense=()=>{
    setModal(true)
    setEditExpense({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 250);
  }
  useEffect(()=>{
    if(Object.keys(editExpense).length>0){
      setModal(true)
  
      setTimeout(() => {
        setAnimateModal(true)
      }, 250)}
  },[editExpense])

  useEffect(()=>{
    localStorage.setItem('budget', budget ?? 0);
  },[budget])

  const saveExpense = newExpense=>{
    if(newExpense.id){
      
      const updatedExpense = expenses.map(expenseState=>
        newExpense.id === expenseState.id ? newExpense : expenseState)
        
       setExpenses(updatedExpense)
       setEditExpense({})
    }else{
      newExpense.id = generateId()
      newExpense.date = Date.now()
      setExpenses([...expenses, newExpense])
    }

      setTimeout(() => {
          setModal(false)
        }, 500);
      setAnimateModal(false)  
  
  }

  const deleteExpense= id=>{
    const remainingExpense = expenses.filter(expense=> expense.id !== id )
    setExpenses(remainingExpense);
  }
    
  return (
      <div className={modal ? 'fijar':''}>
        <Header
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
          expenses={expenses}
        />

        {isValidBudget && (
          <>
            <main>
              <ExpenseList
              expenses={expenses}
              setExpenses={setExpenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              />
            </main>
            <div className="nuevo-gasto">
              <img src={IconNewExpense} alt="icon new expense" onClick={handleNewExpense}/>
            </div>
          </>
        )}

        {modal &&(
          <Modal
            setModal={setModal}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
            saveExpense={saveExpense}
            editExpense={editExpense}
            setEditExpense={setEditExpense}
          />)}

      </div> 
  )
}

export default App
