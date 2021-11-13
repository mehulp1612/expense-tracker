import "./ExpenseItems.css";
import React,{useState} from 'react'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";



function ExpenseItem(props) {


    // const [title, setTitle] = useState(props.title);

    // function clickHandler() {
    //     setTitle('updated');
    // }

    return (
        <li>
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
        </li>
    )
}

export default ExpenseItem;