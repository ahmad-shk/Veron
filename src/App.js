import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './Pages/layout';
import './App.css';
import RegisterLayout from './Pages/RegisterLayout';
import LoginLayout from './Pages/LoginLayout';
import PaymentLayout from './Pages/PaymentLayout';
import ThankLayout from './Pages/ThankLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginLayout/>}/>
        <Route path='/register' element={<RegisterLayout/>}/>
        <Route path='/layout' element={<Layout/>}/>
        <Route path='/payment' element={<PaymentLayout/>}/>
        <Route path='/thankPage' element={<ThankLayout/>}/>
      </Routes>
    </Router>
  );
}

export default App;