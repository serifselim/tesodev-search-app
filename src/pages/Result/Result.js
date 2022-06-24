import React from 'react';
// Styles
import styles from './Result.module.css';
import { List, Order, Pagination } from '../../components';
import { useSelector } from 'react-redux';

const Result = () => {
    // Style Variables
    const { container, resultBox } = styles;
    const { filterArr } = useSelector(state => state.search);

    return (
        <main className={container}>
            <section className={resultBox}>
                <Order />
                <List />
                {filterArr.length > 5 && <Pagination />}
                {/* Belli bir sayfa üzerinde olması halinde pagination componenti devreye girer */}
            </section>
        </main>
    );
};

export default Result;