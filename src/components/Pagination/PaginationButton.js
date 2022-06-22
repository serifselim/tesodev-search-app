/* eslint-disable eqeqeq */
import React from 'react';
import styles from './Pagination.module.css';
import { useSelector } from 'react-redux';

const PaginationButton = ({ pageValue, handleClick }) => {
    const { currentPage } = useSelector(state => state.search);

    const { pagItem, pagBtn } = styles;
    const activeButtonStyle = {
        backgroundColor: '#204080',
        color: '#fff',
        border: 'none'
    };

    return (
        <li className={pagItem}>
            <button
                className={pagBtn}
                style={pageValue == currentPage ? activeButtonStyle : null}
                value={pageValue}
                onClick={handleClick}
            >
                {pageValue}
            </button>
        </li>
    );
};

export default PaginationButton;