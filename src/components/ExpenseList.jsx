import Expense from "./Expense"

const ExpenseList = ({expenses, setEditExpense,deleteExpense})=>{
    return(
        <div className="listado-gastos contenedor">
            <h2>{expenses.length ? 'Expenses List' : 'No Expenses Yet' }
                {expenses.map(expense=>(
                    <Expense
                    key={expense.id}
                    expense = {expense} 
                    setEditExpense={setEditExpense}
                    deleteExpense={deleteExpense}
                    />
                ))}
            </h2>
        </div>
    )
}
export default ExpenseList