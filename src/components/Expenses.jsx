import React, { useContext } from 'react'
import { Context } from '../App'

const Expenses = ( ) => {
  
    const {expenseData} = useContext(Context)

  return (
    <div>
      <h2>Expenses:</h2>
      {expenseData.map(expense=><ul> <li>{expense.title} : {expense.price}    Rs</li> </ul>)}
      <div>
        
      </div>
    </div>
  )
}

export default Expenses
