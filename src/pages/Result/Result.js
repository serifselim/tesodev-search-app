import React from 'react';
// Styles
import styles from './Result.module.css';
import { List, Pagination } from '../../components';

const Result = () => {
    // Style Variables
    const { container, resultBox } = styles;

    return (
        <main className={container}>
            <section className={resultBox}>
                <List />
                <Pagination />
            </section>
        </main>
    );
};

export default Result;