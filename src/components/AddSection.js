import React, { useState } from 'react'

const AddSection = () => {

   const [transition, setTransition] = useState({
      title: "",
      amount: ""
   })

   const changeHandler = (event) => {

      setTransition(prevTransition => {
         return {
            ...prevTransition,
            [event.target.name] : event.target.value
         }
      })
      console.log(transition)
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
        
         <input type='submit' />

      </form>
    </div>
  )
}

export default AddSection