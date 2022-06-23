import React from 'react';
import { Footer, News, Search } from '../../components';
import ListItem from '../../components/List/ListItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from './Logo';
//Styles
import styles from './Home.module.css';
import utilsStyles from '../../styles/utils.module.css';

const Home = () => {
    // Style Variables
    const { container, showBox, navBtn, searchBox } = styles;
    const { title } = utilsStyles;
    const { currentPageData } = useSelector(state => state.search);

    return (
        <main className={container}>
            <Logo />
            <section className={searchBox}>
                <h1 className={title}>Find in records</h1>
                <Search home={true} />
            </section>
            <div className={showBox}>
                <ul>
                    {
                        currentPageData.map((item, i) => {
                            if (i < 3) {
                                return (
                                    <ListItem
                                        key={i}
                                        nameSurname={item[0]}
                                        company={item[1]}
                                        date={item[3]}
                                        country={item[4]}
                                        city={item[5]}
                                    />
                                );
                            }
                        })
                    }
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