import { useEffect, useState } from "react"
import Header from "./components/Header"
import Modal from "./components/Modal"
import Filter from "./components/Filter"
import ExpenseList from "./components/ExpenseList"
import IconNewExpense from "./img/nuevo-gasto.svg"
import { generateId }from "./helpers/index"

function App() {
  
  const[budget, setBudget]=useState(
    Number(localStorage.getItem('budget')) ?? 0)
  const[expenses, setExpenses]=useState(
    localStorage.getItem('expenses')?JSON.parse(localStorage.getItem('expenses')):[])
  
  const[isValidBudget, setIsValidBudget]=useState(false)
  
  const[modal,setModal]=useState(false)
  const[animateModal, setAnimateModal]=useState(false)
  
  const[editExpense, setEditExpense]=useState({})

  const[filter, setFilter]=useState('')
  const[filteredList, setFilteredList]=useState([])

//open modal for new expense
  const handleNewExpense=()=>{
    setModal(true)
    setEditExpense({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 250);
  }

//Edit expense
  useEffect(()=>{
    if(Object.keys(editExpense).length>0){
      setModal(true)
  
      setTimeout(() => {
        setAnimateModal(true)
      }, 250)}
  },[editExpense])

// Save the budget in  local storage
  useEffect(()=>{
    localStorage.setItem('budget', budget ?? 0);
  },[budget])

// Save expenses in local storage 
  useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  },[expenses])

//filter out expenses based on the category
useEffect(()=>{
  if(filter){
    const filteredExpense = expenses.filter(expense=> expense.category === filter)
    setFilteredList(filteredExpense); 
  }
},[filter])

//Skips intro page if there is budget 
  useEffect(()=>{
    const budgetLS= Number(localStorage.getItem('budget')) ?? 0
    if(budgetLS > 0){
      setIsValidBudget(true)
    }
    
  },[])

//saves new or edited expense and closes modal
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

//deletes expense
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
          setExpenses={setExpenses}
        />

        {isValidBudget && (
          <>
            <main>
              <Filter
              filter={filter}
              setFilter={setFilter}
              />
              <ExpenseList
              filteredList={filteredList}
              filter={filter}
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
