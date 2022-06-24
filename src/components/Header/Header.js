import React from 'react';
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

    const LogoDiv = () => (<div className={logoBox}>
        {pathname !== '/' &&
            <Link to='/'>
                <img src={logoSrc} alt='logo' height={63} />
            </Link>
        }
        {pathname === '/add' &&
            <div className={returnBox}>
                <Link to='/' className={returnBtn}>
                    <img src={returnSrc} alt='icon' />
                    Return to List Page
                </Link>
            </div>
        }
    </div>);

    const SearchDiv = () => (
        <>
            {pathname === '/result' &&
                <div className={formBox}>
                    <Search />
                </div>
            }
        </>
    );

    const AddDiv = () => (
        <>
            {pathname !== '/add' &&
                <div className={addBox}>
                    <Link to='/add'>
                        <button className={btn} >
                            Add new record
                        </button>
                    </Link>
                </div>
            }
        </>
    );

    return (
        <header className={header}>
            <div className={desktopBox}>
                <section className={headerBox}>
                    <LogoDiv />
                    <SearchDiv />
                    <AddDiv />
                </section>
            </div>

            <div className={mobileBox}>
                <section className={headerBox}>
                    <div className={firstElement}>
                        <LogoDiv />
                        <AddDiv />
                    </div>
                    <div className={secondElement}>
                        <SearchDiv />
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;