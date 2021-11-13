import './ExpenseForm.css'
import {useState} from 'react';





function ExpenseForm(props) {

    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[add,setAdd]=useState(false);

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
        //console.log(enteredTitle);
        
    }

    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
        //console.log(enteredDate);
        
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
        //console.log(enteredAmount);
    }

    function submitHandler(event){
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date: new Date(enteredDate)
        }

        

        //console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
            
        </form>
    )
}

export default ExpenseForm;
