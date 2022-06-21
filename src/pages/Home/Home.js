import React from 'react';
import { Footer, News, Search } from '../../components';
import Logo from './Logo';
//Styles
import styles from './Home.module.css';

const Home = () => {
    // Style Variables
    const { container } = styles;

    return (
        <main className={container}>
            <Logo />
            <Search />
            <News />
            <Footer />
        </main >
    );
};

export default Home;