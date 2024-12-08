import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function Expenseitem(props) {
    const [title,setTitle] = useState(props.title)
    const clickHandler=()=>{
        console.log(title)
        setTitle('updated')
        
    }
    
    
    let expenseAmount = props.amount
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
                <button onClick={clickHandler}>Update</button>
            </div>
        </div>
    )
}
export default Expenseitem;