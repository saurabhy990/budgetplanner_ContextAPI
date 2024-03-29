import { useContext } from "react"
import { Context } from "../App" 

const Overview = ( ) => {

  const {totalExpense} = useContext(Context)
  const budget = 2000
  return (
    < >
      
       
       <h2 style={{color:'white'}}>Budget:{budget}</h2>
      <h2  style={{color:'green'}}>Reamaining:{budget-totalExpense}</h2>
      <h2  style={{color:'red'}}>Spant so far:{totalExpense}</h2>
    </ >
  )
}

export default Overview
