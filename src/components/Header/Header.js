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
    const { logoBox, formBox, addBox, headerBox, header, returnBox, returnBtn } = styles;
    // React Router
    const { pathname } = useLocation();

    return (
        <header className={header}>
            <section className={headerBox}>
                <div className={logoBox}>
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
                </div>

                {pathname === '/result' &&
                    <div className={formBox}>
                        <Search />
                    </div>
                }

                {pathname !== '/add' &&
                    <div className={addBox}>
                        <Link to='/add'>
                            <button className={btn} >
                                Add new record
                            </button>
                        </Link>
                    </div>
                }

            </section>
        </header>
    );
};

export default Header;