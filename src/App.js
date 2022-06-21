import React from 'react';
import { Add, Home, Result } from './pages';
import { Header } from './components';

// React Router
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/result'
          element={<Result />}
        />
        <Route
          path='/add'
          element={<Add />}
        />
      </Routes>
    </>
  );
};

export default App;