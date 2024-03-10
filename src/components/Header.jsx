import NewBudget from "./NewBudget"
import ControlBudget from "./ControlBudget"
const Header =({budget, setBudget,isValidBudget,setIsValidBudget, expenses})=>{
    return(
        <header>
            <h1>Budgeting App</h1>
            
            {isValidBudget?
                <ControlBudget
                    budget={budget}
                    expenses={expenses}
                />:
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    isValidBudget={isValidBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            }
        </header>

    )
}
export default Header