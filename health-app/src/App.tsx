import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PatientProfile from './components/PatientProfile';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/patients/1" replace />} />
        <Route path="/patients/:id" element={
          <Layout>
            <PatientProfile />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;