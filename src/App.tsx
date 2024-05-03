import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Meals, InProgress } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/meals" element={ <Meals /> } />
      <Route path="/inprogress" element={ <InProgress /> } />
    </Routes>
  );
}

export default App;
