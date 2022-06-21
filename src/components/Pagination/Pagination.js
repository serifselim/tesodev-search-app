import React from 'react';
import styles from './Pagination.module.css';

const Pagination = () => {

    const { pagBox, pagItem, pagBtn, pagList, pagBtnLg } = styles;

    return (
        <section className={pagBox}>
            <ul className={pagList}>
                <li className={pagItem}>
                    <button className={`${pagBtn} ${pagBtnLg}`}>
                        Previous
                    </button>
                </li>
                <li className={pagItem}>
                    <button className={pagBtn}>
                        1
                    </button>
                </li>
                <li className={pagItem}>
                    <button className={pagBtn}>
                        2
                    </button>
                </li>
                <li className={pagItem}>
                    <button className={pagBtn}>
                        3
                    </button>
                </li>
                <li className={pagItem}>
                    <button className={pagBtn}>
                        1
                    </button>
                </li>
                <li className={pagItem}>
                    <button className={`${pagBtn} ${pagBtnLg}`}>
                        Next
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default Pagination;