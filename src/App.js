import React, { useEffect } from 'react';
import { Add, Home, Result } from './pages';
import { Header } from './components';
// React Router
import { Routes, Route } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPageData } from './features/searchSlice';

const App = () => {

  const { currentPage, filterArr } = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPageData());
  }, [currentPage, filterArr]);

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