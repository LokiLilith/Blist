import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

    const items =  props.items.map((item) => {
      return (
         <ExpenseItem key={item.id}  title={item.title} amount={item.amount} date={item.date} />
         )
      }
   )
   
   const message = <h2 className='expense-list__fallback'>Nessuna spesa trovata</h2>;

   const content = items.length > 0 ? items: message

   return (
      <ul className="expense-list">
       {content}
      </ul>
   )
}

export default ExpenseList