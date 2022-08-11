import React from 'react'

const AddSection = () => {
  return (
    <div>
      <h2>Add a New Transition</h2>
      <form>
         <label>Title:</label>
         <input type='text'/>
         <label>Amount:</label>
         <input type='number'/>
         <input type='submit'/>
      </form>
    </div>
  )
}

export default AddSection