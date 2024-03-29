import { useContext, useRef } from "react"
import {Context} from './App'
 

const AddExpenses = ( ) => {

  const{setExpenseData,setTotalexpense}= useContext(Context)
  const titleRef = useRef();
  const priceRef = useRef();
  return (
   <>
    <div>
      
      <input ref ={titleRef} type='text' placeholder='Name'></input>
      <input ref = {priceRef} type='number' placeholder='Cost'></input>
     
    </div>
     <button
     onClick={()=>{
       const title = titleRef.current.value;
       const price = parseInt(priceRef.current.value);
       setExpenseData(prevData=>[...prevData,{title,price}])
       setTotalexpense(prevValue=>price+prevValue)
       titleRef.current.value=""
       priceRef.current.value=""
     }}>save</button></>
  )
}

export default AddExpenses
