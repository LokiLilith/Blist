
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "../Chart/ExpenseChart";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
const Expenses = (props) => {
   const [year, setYear] = useState('2020')
   
   const filteredExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === year;
   });
 

         
      
      const filterHandler = (data) => {
      console.log("siamo in expenses");
      setYear(data)
      console.log(year)
   }
   
   
  
   
    
   return (
      <div>
         <Card className="expenses">
            <ExpenseFilter selected={year} onFilterData={filterHandler}/>
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses}/>
         </Card>
      </div>
   )
}


export default Expenses
  




