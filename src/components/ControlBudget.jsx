const ControlBudget=({budget})=>{

    const formatBudget=(amount)=>{
         return amount.toLocaleString('es-ES',{
            style: 'currency',
            currency:'EUR'
        })
    }
    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Grafica</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Budget:</span> {formatBudget(budget)}
                </p>
                <p>
                    <span>Available:</span> {formatBudget(0)}
                </p>
                <p>
                    <span>Spent:</span> {formatBudget(0)}
                </p>
            </div>
        </div>
    )
}
export default ControlBudget