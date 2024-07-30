import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ListView from './pages/ListView';
import DetailView from './pages/DetailView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
};

export default App;
