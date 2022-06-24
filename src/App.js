import React, { useEffect } from 'react';
import { Add, Home, Result } from './pages';
import { Header } from './components';
// React Router
import { Routes, Route } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPageData } from './features/searchSlice';
// Styles
import styles from './App.module.css';

const App = () => {

  const { currentPage, filterArr } = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPageData());
  }, [currentPage, filterArr]);
  /* 
    Uygulama ilk çalıştığı zaman aktif olan arrayimizin güncellenmesi için useEffect kullandık
    onun haricinden pagination kısmında yapmış olduğumuz eventlerin dinlenmesini yine bu kod bloğu içerisinde sağlıyoruz ve 
    sayfa numarasına göre gösterilecek array dizinini güncelliyoruz
  */

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
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
      </div>
    </div>
  );
};

export default App;