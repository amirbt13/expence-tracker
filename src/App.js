import { useState } from 'react';

//Components
import Balance from './components/Balance';
import History from './components/History';
import AddSection from './components/AddSection';

// CSS
import './App.css';

function App() {

  const [balance, setBalance] = useState([])

  return (
    <div className="App">
      
      <Balance balance={balance}/>

      <History balance={balance}/>

      <AddSection balance={balance} setBalance={setBalance}/>

    </div>
  );
}

export default App;
