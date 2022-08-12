import React from 'react'

// Component
import HistoryItem from './HistoryItem'

const History = ({ balance }) => {
  return (
    <div>
      <h2>History:</h2>
       {balance.map(transition => <HistoryItem key={transition.id} transition={transition}/>)}
    </div>
  )
}

export default History