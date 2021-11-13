import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from 'react';




function NewExpense(props){

    const [add,setAdd]=useState(false);

    function newSubmitHandler(){
        setAdd(true);
        //console.log(add);

    }

    function saveExpenseDataHandler(enteredExpenseData){

        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };

        //console.log(expenseData);

        props.onAddExpense(expenseData);
        setAdd(false);
    }

   function stopEditingHandler(){
       setAdd(false);
   }

    return(
        <div className='new-expense'>
            {!add && <button type='submit' className='new-expense__button' onClick={newSubmitHandler}>Add New Expense</button>}
            {add && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
    
}

export default NewExpense;
