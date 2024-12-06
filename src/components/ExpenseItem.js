import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function Expenseitem(props) {


    
    const expenseTitle = props.title
    const expenseAmount = props.amount
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    )
}
export default Expenseitem;