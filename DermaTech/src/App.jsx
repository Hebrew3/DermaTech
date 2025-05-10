import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginForm'; 
import Schedule from './pages/Schedule';// Corrected import to use uppercase 'Login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/schedule" element={<Schedule/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;