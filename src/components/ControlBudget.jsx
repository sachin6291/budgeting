import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlBudget=({budget, expenses})=>{

    const [percentage, setPercentage]=useState(0)
    const [available, setAvailable]= useState(0)
    const [spent, setSpent]= useState(0)

    useEffect(()=>{
        const totalSpent = expenses.reduce((total, expense)=>expense.amount + total, 0)
        const totalAvailable=budget-totalSpent

        const newPercentage = (totalSpent*100/budget).toFixed(2)
       
        setSpent(totalSpent)
        setAvailable(totalAvailable)

        setTimeout(() => {
            setPercentage(newPercentage)
        }, 1500);

        
    },[expenses])

    const formatBudget=(amount)=>{
         return amount.toLocaleString('es-ES',{
            style: 'currency',
            currency:'EUR'
        })
    }
   
    
    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
            <CircularProgressbar 
                value={percentage} 
                text={`${percentage}% Spent`}
                styles={buildStyles({
                    pathColor:'#3B82F6',
                    trailColor: '#f5f5f5',
                    textColor:'#3B82F6'
                })}
                 />;
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Budget:</span> {formatBudget(budget)}
                </p>
                <p>
                    <span>Available:</span> {formatBudget(available)}
                </p>
                <p>
                    <span>Spent:</span> {formatBudget(spent)}
                </p>
            </div>
        </div>
    )
}
export default ControlBudget