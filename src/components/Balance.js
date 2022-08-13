import React from 'react'

const Balance = ({ balance }) => {

  const getSum = (total, amount) => {
    return total + +amount.amount
  }

  const totalBalance = balance.reduce(getSum, 0)

  const incomes = balance.filter(transition => transition.isExpence === false)
  const expences = balance.filter(transition => transition.isExpence === true)

  const totalIncomesAmount = incomes.reduce(getSum, 0)
  const totalExpencesAmount = expences.reduce(getSum, 0)

  return (
    <div>
      <h2>Total Balance: {totalBalance}</h2>
      <div>
         <h4>incomes:</h4><span>${totalIncomesAmount}</span>
         <h4>expence:</h4><span>${totalExpencesAmount}</span>
      </div>
    </div>
  )
}

export default Balance