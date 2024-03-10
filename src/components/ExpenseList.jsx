import Expense from "./Expense"


const ExpenseList = ({expenses, setEditExpense,deleteExpense, filter,filteredList})=>{
    return(
        <div className="listado-gastos contenedor">
            

            {filter ?(
                <>
                <h2>{filteredList.length ? 'Filtered List' : 'No Expenses Yet' }</h2>
                    {filteredList.map(expense=>(
                        <Expense
                            key={expense.id}
                            expense = {expense} 
                            setEditExpense={setEditExpense}
                            deleteExpense={deleteExpense}
                        />
                    ))}
                </>
            ):(
                <>
                    <h2>{expenses.length ? 'Expenses List' : 'No Expenses Yet' }</h2>
                    { expenses.map(expense=>(
                        <Expense
                            key={expense.id}
                            expense = {expense} 
                            setEditExpense={setEditExpense}
                            deleteExpense={deleteExpense}
                        />
                    ))}
                </>       
            )}
            
        </div>
    )
}
export default ExpenseList