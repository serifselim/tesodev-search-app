import React from 'react';
// Assets
import logoSrc from '../../assets/logo.png';
//Styles
import styles from './Home.module.css';
import utilsStyles from '../../styles/utils.module.css';
import { News } from '../../components';

const Home = () => {
    // Style Variables
    const { input, btn, title } = utilsStyles;
    const { container, logoBox, searchBox, form } = styles;

    return (
        <main className={container}>
            <section className={logoBox}>
                <img src={logoSrc} alt='logo' height={115} />
            </section>
            <section className={searchBox}>
                <h1 className={title}>Find in records</h1>
                <form className={form}>
                    <input className={input} placeholder='Search' />
                    <button className={btn}>Search</button>
                </form>
            </section>
            <News />
        </main>
    );
};

export default Home;