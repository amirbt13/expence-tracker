import { useState } from 'react';

//Components
import Balance from './components/Balance';
import History from './components/History';
import AddSection from './components/AddSection';

// CSS
import './App.css';

function App() {

  const [balance, setBalance] = useState([])

  const [totalBalance, setTotalBalance] = useState(0)

  return (
    <div className="App">
      
      <Balance totalBalance={totalBalance} setTotalBalance={setTotalBalance} balance={balance}/>

      <History balance={balance}/>

      <AddSection totalBalance={totalBalance} balance={balance} setBalance={setBalance}/>

    </div>
  );
}

export default App;
