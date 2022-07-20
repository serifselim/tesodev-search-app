import React, { useEffect } from 'react';
import Search from '../Search/Search';
// React Router
import { useLocation, Link } from 'react-router-dom';
// Styles
import utilsStlyes from '../../styles/utils.module.css';
import styles from './Header.module.css';
// Assets
import logoSrc from '../../assets/logo.png';
import returnSrc from '../../assets/return.svg';

const Header = () => {
    // Style Variables
    const { btn } = utilsStlyes;
    const { logoBox, formBox, addBox, headerBox, header, returnBox, returnBtn, desktopBox, mobileBox, firstElement, secondElement } = styles;
    // React Router
    const { pathname } = useLocation();

    const logoDiv = (
        <Link to='/'>
            <img src={logoSrc} alt='logo' height={63} />
        </Link>
    );

    const returnListPage = (
        <div className={returnBox}>
            <Link to='/' className={returnBtn}>
                <img src={returnSrc} alt='icon' />
                Return to List Page
            </Link>
        </div>
    );

    const searchDiv =
        <div className={formBox}>
            <Search />
        </div>;

    const addDiv = (
        <div className={addBox}>
            <Link to='/add'>
                <button className={btn} >
                    Add new record
                </button>
            </Link>
        </div>
    );

    return (
        <header className={header}>
            <div className={desktopBox}>
                <section className={headerBox}>
                    <div className={logoBox}>
                        {pathname !== '/' && logoDiv}
                        {pathname === '/add' && returnListPage}
                    </div>
                    {pathname === '/result' && searchDiv}
                    <div>
                        {pathname !== '/add' && addDiv}
                    </div>

                </section>
            </div>

            <div className={mobileBox}>
                <section className={headerBox}>
                    <div className={firstElement}>
                        {pathname !== '/' && logoDiv}
                        {pathname !== '/add' && addDiv}
                    </div>
                    <div className={secondElement}>
                        {pathname === '/result' && searchDiv}
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;