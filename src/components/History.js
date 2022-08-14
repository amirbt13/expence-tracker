import React from 'react'

// Component
import HistoryItem from './HistoryItem'

const History = ({ balance, setBalance }) => {

    const removeHandler = (id) => {
    const newBalance = balance.filter(transition => transition.id !== id)
    setBalance([...newBalance])
  }


  return (
    <div className='history'>
      <h2>History:</h2>
       {balance.map(transition => <HistoryItem key={transition.id} transition={transition} removeHandler={()=>removeHandler(transition.id)}/>)}
    </div>
  )
}

export default History