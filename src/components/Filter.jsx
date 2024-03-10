
const Filter = ({filter, setFilter}) => {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className="campo">
                <label htmlFor="filter">Filter Expense</label>
                <select id="filter"
                    value={filter}
                    onChange={e=>setFilter(e.target.value)}
                >
                    <option value="">All Expenses</option>
                    <option value="savings">Savings</option>
                    <option value="groceries">Groceries</option>
                    <option value="household">Household</option>
                    <option value="leisure">Leisure</option>
                    <option value="health">Health</option>
                    <option value="subscription">Subscription</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filter