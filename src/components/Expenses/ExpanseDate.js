import "./ExpanseDate.css"

const ExpanseDate = (props) => {
   const month = props.date.toLocaleString('it-IT', { month: "long" });
   const day = props.date.toLocaleString('it-IT', { day: "2-digit" });
   const year = props.date.getFullYear();

   return (
      <div className="expanse-date">
      <div className="expase-date__month">{month}</div>
      <div className="expanse-date__year">{year}</div>
      <div className="expanse-date__day">{day}</div>
      </div>
   )
}

export default ExpanseDate