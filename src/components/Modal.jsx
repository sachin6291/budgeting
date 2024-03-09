import IconClose from "../img/cerrar.svg"
const Modal =({setModal, animateModal,setAnimateModal})=>{

    const hideModal=()=>{
        setTimeout(() => {
            setModal(false)
          }, 500);
        setAnimateModal(false)  
 
    }

    return(
        <div className="modal">
            <div className="cerrar-modal">
                <img src={IconClose} alt="close" onClick={hideModal}/>
            </div>
            <form className={`formulario ${animateModal ? "animar" : 'cerrar'}`}>
                <legend>New Expense</legend>
                <div className="campo">
                    <label htmlFor="name">Expense Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Add the name of the expense"
                    />
                </div>
                <div className="campo">
                    <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        placeholder="Add the amount of the expense ej: 100.50"
                    />
                </div>
                <div className="campo">
                    <label htmlFor="class">Category</label>
                    <select id="class">
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