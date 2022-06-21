import React from 'react';
import { Home, Result } from './pages';

// React Router
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/result'
        element={<Result />}
      />
    </Routes>
  );
};

export default App;