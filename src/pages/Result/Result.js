import React from 'react';
// Styles
import styles from './Result.module.css';
import { List, Order, Pagination } from '../../components';

const Result = () => {
    // Style Variables
    const { container, resultBox } = styles;

    return (
        <main className={container}>
            <section className={resultBox}>
                <Order />
                <List />
                <Pagination />
            </section>
        </main>
    );
};

export default Result;