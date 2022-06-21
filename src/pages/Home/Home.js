import React from 'react';
import { Footer, News, Search } from '../../components';
import Logo from './Logo';
//Styles
import styles from './Home.module.css';
import ListItem from '../../components/List/ListItem';
import { Link } from 'react-router-dom';

const Home = () => {
    // Style Variables
    const { container, showBox, navBtn } = styles;

    return (
        <main className={container}>
            <Logo />
            <Search />
            <div className={showBox}>
                <ul>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </ul>
                <Link to='/result' className={navBtn}>
                    Show more...
                </Link>
            </div>
            <News />
            <Footer />
        </main >
    );
};

export default Home;