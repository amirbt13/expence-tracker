import React from 'react'

const HistoryItem = ({ transition, removeHandler }) => {
  return (
    <div className='historyItem'>
      <h5>title:{transition.title}</h5>
      <span>
        <span>Amount: ${transition.amount}</span><span className='removeBtn' onClick={(event)=>removeHandler(event.target.id)}>X</span>
      </span>
    </div>
  )
}

export default HistoryItem