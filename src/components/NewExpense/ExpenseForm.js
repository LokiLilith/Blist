import "./ExpenseForm.css"
import { useState } from "react"

const ExpenseForm = (props) => {

   const [enteredtitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('')
   const [forma,setForma] = useState(false)

   const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value)
      
   };
   const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value)
     
   };

   const dataChangeHandler = (event) => {
      setEnteredDate(event.target.value)
      
   }

   const submitHandler = (event) => {
      event.preventDefault()
      const expenseData = {
         title: enteredtitle,
         amount: enteredAmount,
         date: new Date(enteredDate)
      }

      props.onSaveExpenseData(expenseData)
      setEnteredTitle('');
      setEnteredAmount("");
      setEnteredDate("");
      onCancellClick();
      
   };

   const onFormClick = () => {
    setForma(true)
   }
   const onCancellClick = () => {
      setForma(false)
      
   }

   

   const form = <form onSubmit={submitHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input value={enteredtitle} onChange={titleChangeHandler} type="text"/>
            </div>
            <div className="new-expense__control">
               <label>amount</label>
               <input value={enteredAmount} onChange={amountChangeHandler} type="number"min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               <input value={enteredDate} onChange={dataChangeHandler} type="date" min="2019-01-01"  max="2022-12-31"/>
            </div>
         </div>
         <div className="new-expense__actions">
         <button type="submit" >Add Expenses</button >
         <button onClick={onCancellClick}>Cancel</button>
         </div>
      </form>

      

   return (
      <div>
         {forma ? form: <button onClick={onFormClick}>Click me</button>}
      </div>
         
   )
}

export default ExpenseForm