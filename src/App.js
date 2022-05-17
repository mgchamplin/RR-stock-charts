import './App.css';
import ChartList from './components/ChartList'; 
import ChartDetails from './components/ChartDetails'; 
import Account from './components/Account';
import InvestmentLinks from './components/InvestmentLinks';
import ErrorPage from "./components/ErrorPage";

import { Routes, Route } from 'react-router-dom';
import PortfolioContext from "./PortfolioContext";
import TopNavBar from './TopNavBar'

function App() {

  const stockData = [
    {symbol : "NFLX",
     description: "It is Netflix",
     image: "./SampleChart.jpg"},
     {symbol : "CSCO",
     description: "It is Cisco",
     image: "./SampleChart.jpg"},
     {symbol : "GILD",
     description: "It is Gilead",
     image: "./SampleChart.jpg"},
     {symbol : "AMZN",
     description: "It is Amazon",
     image: "./SampleChart.jpg"},
     {symbol : "NVDA",
     description: "It is Nvidia",
     image: "./SampleChart.jpg"},
     {symbol : "MSFT",
     description: "It is Microsoft",
     image: "./SampleChart.jpg"},
     {symbol : "GOOG",
     description: "It is Google",
     image: "./SampleChart.jpg"},
    ]

  return (
    <main>
      <PortfolioContext.Provider value={stockData}>
        <div className="App">
          <TopNavBar />
          <h1>Stock Charts Portfolio</h1>

          <Routes>
              <Route path="/" element={<ChartList />} />
              <Route path="/details/:id" element={<ChartDetails />} />
              <Route path="/account" element={<Account />} />
              <Route path="/links" element={<InvestmentLinks />} />
              <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </div>
      </PortfolioContext.Provider>
    </main>
    

  );
}

export default App; 