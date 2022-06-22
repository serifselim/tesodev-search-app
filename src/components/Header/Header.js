import React from 'react';
// React Router
import { useLocation, Link } from 'react-router-dom';
// Styles
import utilsStlyes from '../../styles/utils.module.css';
import styles from './Header.module.css';
// Assets
import logoSrc from '../../assets/logo.png';
import returnSrc from '../../assets/return.svg';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setFilterArrWithText, setSearchText } from '../../features/searchSlice';

const Header = () => {
    // Style Variables
    const { btn, input } = utilsStlyes;
    const { logoBox, form, formBox, addBox, headerBox, header, returnBox, returnBtn } = styles;
    // React Router
    const { pathname } = useLocation();
    // Redux
    const { searchText } = useSelector(state => state.search);
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(setSearchText(e.target.value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setFilterArrWithText());
    };

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
                        <form onSubmit={handleSubmit} className={form}>
                            <input
                                placeholder='Search'
                                value={searchText}
                                onChange={handleChange}
                                className={input}
                                required
                            />
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