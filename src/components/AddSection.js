import React, { useState } from 'react'

const AddSection = ({balance, setBalance}) => {

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


      setBalance(prevBalance => {
         return [
            ...prevBalance,
            {...transition}
         ]
      })

      setTransition({
         title: "",
         amount: "",
         isExpence: false
      })

      console.log(balance)
   }


  return (
    <div>
      <h2>Add a New Transition</h2>
      <form>
        <div> 
         <label>Title:</label>
         <input type='text' name='title' value={transition.title} onChange={changeHandler}/>
        </div>          

        <div> 
         <label>Amount:</label>
         <input type='number' name='amount' value={transition.amount} onChange={changeHandler}/>
        </div>
        
         <input type='submit' onClick={submitHandler}/>

      </form>
    </div>
  )
}

export default AddSection