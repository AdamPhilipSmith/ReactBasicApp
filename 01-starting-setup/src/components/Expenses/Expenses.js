import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props)
{
    const [filteredYear, setFilteredYear] = useState('2020');
   
    const saveYearHandler = (chosenYear) =>{
        setFilteredYear(chosenYear);
    }
    
   
    return (
            <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSaveYear={saveYearHandler} />
                {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
            </Card>
            </div>
    );
}

export default Expenses;