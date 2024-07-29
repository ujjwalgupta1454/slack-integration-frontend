import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntegrationCards from './components/IntegrationCards';
import FormPage from './components/FormPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<IntegrationCards />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  </Router>
);

export default App;
