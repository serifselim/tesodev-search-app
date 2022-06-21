import React, { useEffect } from 'react';
// React Router
import { useLocation } from 'react-router-dom';
// Styles
import utilsStlyes from '../../styles/utils.module.css';
import styles from './Header.module.css';
// Assets
import logoSrc from '../../assets/logo.png';

const Header = () => {
    // Style Variables
    const { btn, input } = utilsStlyes;
    const { logoBox, form, formBox, addBox, headerBox, header } = styles;

    const { pathname } = useLocation();

    return (
        <header className={header}>

            <section className={headerBox}>
                <div className={logoBox}>
                    {pathname !== '/' &&
                        <img src={logoSrc} alt='logo' height={63} />
                    }
                </div>
                <div className={formBox}>
                    {pathname === '/result' &&
                        <form className={form}>
                            <input placeholder='Search' className={input} required />
                            <button className={btn} >Search</button>
                        </form>
                    }
                </div>
                <div className={addBox}>
                    {pathname !== '/add' &&
                        <button className={btn} >
                            Add new record
                        </button>
                    }
                </div>
            </section>
        </header>
    );
};

export default Header;