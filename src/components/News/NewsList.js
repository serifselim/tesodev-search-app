import React from 'react';
// Styles
import styles from './News.module.css';
import NewsItem from './NewsItem';

const NewsList = () => {
    //Style Variables
    const { newsList } = styles;

    return (
        <ul className={newsList}>
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </ul>
    );
};

export default NewsList;