import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import './App.css'; // Import your CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={<Layout/>} />
      
      </Routes>
    </Router>
  );
}

export default App;