import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TracksList from './features/Tracks/TracksList';
import Main from "./components/Main"
import FormulaNav from "./components/Nav"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FormulaNav />
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Tracks" element={<TracksList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
