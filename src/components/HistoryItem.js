import React from 'react'

const HistoryItem = ({ transition }) => {
  return (
    <div>
      <h5>title:{transition.title}</h5>
      <span>Amount: ${transition.amount}</span>
    </div>
  )
}

export default HistoryItem