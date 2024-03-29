
import { createContext, useState } from 'react'
import AddExpenses from './AddExpenses'
import './App.css'
import Expenses from './components/Expenses'
import Overview from './components/Overview'
 
export const Context = createContext()

function App() {
  const[totalExpense, setTotalexpense] = useState(0);
   const [expenseData,setExpenseData] = useState([])


   

  return (
    
   <Context.Provider value  ={{totalExpense,setTotalexpense,expenseData,setExpenseData}}>
    < >
     <h1>Budget Planner</h1>
     <hr />
    {/* <Overview totalExpense = {totalExpense} /> */}
    <Overview/>
    <hr />
    {/* <Expenses expenseData= {expenseData}/> */}
    <Expenses/>
    <hr />
    <h2>Add Expenses</h2>
    {/* <AddExpenses setTotalexpense={setTotalexpense} setExpenseData = {setExpenseData}/> */}
    <AddExpenses/>

   </>
   </Context.Provider>
   
  )
}

export default App
