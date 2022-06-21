import React from 'react';
// Styles
import styles from './News.module.css';
import newsSrc from '../../assets/news.png';

const NewsItem = () => {
    //Style Variables
    const { newsItem, newsTitle, newsDecs } = styles;

    return (
        <li className={newsItem}>
            <img src={newsSrc} alt='news' />
            <h3 className={newsTitle}>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
            <span className={newsDecs}>1h ago · by Troy Corlson</span>
        </li>
    );
};

export default NewsItem;