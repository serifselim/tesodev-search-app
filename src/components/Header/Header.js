import React from 'react';
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
    const { btn, input } = utilsStlyes;
    const { logoBox, form, formBox, addBox, headerBox, header, returnBox, returnBtn } = styles;

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
                        <form className={form}>
                            <input placeholder='Search' className={input} required />
                            <button className={btn} >Search</button>
                        </form>
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