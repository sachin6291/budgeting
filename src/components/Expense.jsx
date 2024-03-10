import{ formatDate } from "../helpers/index"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import IconSavings from "../img/icono_ahorro.svg"
import IconHousehold from "../img/icono_casa.svg"
import IconLeisure from "../img/icono_ocio.svg"
import IconGroceries from "../img/icono_comida.svg"
import IconHealth from "../img/icono_salud.svg"
import IconOther from "../img/icono_gastos.svg"
import IconSubscription from "../img/icono_suscripciones.svg"

const iconDictionary = {
    groceries: IconGroceries,
    household: IconHousehold,
    savings: IconSavings,
    leisure: IconLeisure,
    health: IconHealth,
    subscription: IconSubscription,
    other: IconOther
}

const Expense=({expense, setEditExpense,deleteExpense})=>{
    const{name, amount, category, date, id}=expense
    
    const leadingActions =()=>(
        <LeadingActions>
            <SwipeAction onClick={()=>setEditExpense(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions=()=>(
        <TrailingActions>
            <SwipeAction 
            onClick={()=>deleteExpense(id)}
            destructive={true}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return(
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img
                            src={iconDictionary[category]}
                            alt= "icon expense"
                        />
                        <div className="descripcion-gasto">
                            <p className="categoria">{category}</p>
                            <p className="nombre-gasto">{name}</p>
                            <p className="fecha-gasto">Added : {''} <span className="">{formatDate(date)}</span></p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">{amount}€</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
export default Expense