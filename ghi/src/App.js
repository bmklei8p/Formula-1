import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./Main"
import FormulaNav from "./Nav"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <FormulaNav />
        <div className="trying">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
