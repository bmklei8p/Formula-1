import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./Main"
import FormulaNav from "./Nav"
// import Banner from './Banner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Banner /> */}
        <FormulaNav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
