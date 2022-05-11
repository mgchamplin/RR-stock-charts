import './App.css';
import ChartList from './components/ChartList'; 
import ChartDetails from './components/ChartDetails'; 
import Account from './components/Account';
import InvestmentLinks from './components/InvestmentLinks';
import { Routes, Route } from 'react-router-dom';

import TopNavBar from './TopNavBar';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <h1>Stock Charts Portfolio</h1>

      <Routes>
          <Route path="/" element={<ChartList />} />
          <Route path="/details" element={<ChartDetails />} />
          <Route path="/account" element={<Account />} />
          <Route path="/links" element={<InvestmentLinks />} />
      </Routes>
          
    </div>
  );
}

export default App; 