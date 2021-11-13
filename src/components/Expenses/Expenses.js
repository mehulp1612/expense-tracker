import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";
import Card from "..//UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenssesChart from './ExpensesChart';
function Expenses(props) {


    const [filteredYear, setFilteredYear] = useState('2021');

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    let output_Expense = <p>No expense found</p>;

    if (filteredExpenses.length > 0) {
        
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenssesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />

        </Card>

    )
}

export default Expenses;