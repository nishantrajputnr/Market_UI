import './App.css';
import Header from './Header.js';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Liquidity from './Liquidity/Liquidity';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Liquidity" element={<Liquidity />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
