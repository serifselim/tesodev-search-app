import React from 'react';
//Styles
import styles from './Search.module.css';
import utilsStyles from '../../styles/utils.module.css';

const Search = () => {
    // Style Variables
    const { input, btn, title } = utilsStyles;
    const { searchBox, form } = styles;

    return (
        <section className={searchBox}>
            <h1 className={title}>Find in records</h1>
            <form className={form}>
                <input className={input} placeholder='Search' />
                <button className={btn}>Search</button>
            </form>
        </section>

    );
};

export default Search;