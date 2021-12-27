
import './ExpenseFilter.css'



const ExpenseFilter = (props) => {

  
  
   const yearHandler = (e) => {
      
      props.onFilterData(e.target.value)
      
   }

  
   return (
      <div className="expense-filter">
         <div className='expense-filter__controll'>
            <label  >Year</label>
            <select value={props.selected} onChange={yearHandler} >
               <option value={2022}>2022</option>
               <option value={2021}>2021</option>
               <option value={2020}>2020</option>
               <option value={2019}>2019</option>
            </select>

         </div>

      </div>
   )
}

export default ExpenseFilter