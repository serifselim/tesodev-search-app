import React from 'react';
// Styles
import styles from './News.module.css';

const Icon = ({ arrowSrc }) => {
    //Style Variables
    const { arrowIcon } = styles;

    return (
        <a className={arrowIcon} href>
            <img src={arrowSrc} alt="arrow" />
        </a>

    );
};

export default Icon;