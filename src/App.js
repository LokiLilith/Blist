import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
 
const DUMMY_EXPENSES = [{
    id: 'e1',
    title: 'car Insurence',
    amount: 305.82,
    date : new Date(2021, 11, 10),
  },
   {
    id: 'e2',
    title: 'Crocchette gatti',
    amount: 22.8,
    date : new Date(2020, 8, 13),
    },
  {
    id: 'e3',
    title: 'Bread',
    amount: 6.93,
    date : new Date(2020, 7, 30),
    },
  {
    id: 'e4',
    title: 'Water',
    amount: 12.8,
    date : new Date(2021, 5, 5),
    },
  
    
]

const App = ()=> {

const [expenses,setExpenses] = useState(DUMMY_EXPENSES)
  

  

  

  const addExpenseHandler = (expense) => {
    
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
    
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    
    </div>
  );
}

export default App;
