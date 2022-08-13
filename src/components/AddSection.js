import React, { useState } from 'react'
import uniqid from 'uniqid'

const AddSection = ({balance, setBalance, totalBalance}) => {

   const [transition, setTransition] = useState({
      title: "",
      amount: "",
      isExpence: false
   })

   const changeHandler = (event) => {

      setTransition(prevTransition => {
         return {
            ...prevTransition,
            [event.target.name] : event.target.value,
            isExpence: parseInt(event.target.value) < 0 ? true : false
         }
      })
      //console.log(transition)
   }

   const submitHandler = (event) => {
      event.preventDefault()

      if(totalBalance + transition.amount >= 0){
      setBalance(prevBalance => {
         return [
            ...prevBalance,
            {...transition, id:uniqid() }
         ]
      })

      setTransition({
         title: "",
         amount: "",
         isExpence: false
      })
    } else {
      
      window.alert("Total Balance can not be negative")

      setTransition({
         ...transition,
         amount: "",
         isExpence: false
      })
    }
      console.log(balance)
   }


  return (
    <div className='addSection'>
      <h2>Add a New Transition</h2>
      <form>
        <div> 
         <label>Title:</label>
         <input type='text' name='title' value={transition.title} onChange={changeHandler}/>
        </div>          

        <div> 
         <label>Amount:</label><small>(if it's an expence input a negative number)</small>
         <input type='number' name='amount' value={transition.amount} onChange={changeHandler}/>
        </div>
        
        <div>
         <input className='button' type='submit' onClick={submitHandler}/>
        </div>
      </form>
    </div>
  )
}

export default AddSection