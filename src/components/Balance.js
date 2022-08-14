import React, { useEffect } from 'react'

const Balance = ({ balance, totalBalance, setTotalBalance }) => {

  // Defining total balance and incomes and expences
  const getSum = (total, amount) => {
    return total + +amount.amount
  }

  useEffect(() => {
    setTotalBalance(balance.reduce(getSum, 0))
  }, [balance, setTotalBalance])
  
  useEffect(() => {
    if(totalBalance < 0){setTotalBalance(0)}
  }, [totalBalance, setTotalBalance])

  //const totalBalance = balance.reduce(getSum, 0)

  const incomes = balance.filter(transition => transition.isExpence === false)
  const expences = balance.filter(transition => transition.isExpence === true)

  const totalIncomesAmount = incomes.reduce(getSum, 0)
  const totalExpencesAmount = expences.reduce(getSum, 0)


  return (
    <div className='balance'>
      <h2>Total Balance: ${totalBalance}</h2>
      <div className='balanceDetails'>
         <div><h4>incomes:</h4><span>${totalIncomesAmount}</span></div>
         <div><h4>expence:</h4><span>${totalExpencesAmount}</span></div>
      </div>
    </div>
  )
}

export default Balance