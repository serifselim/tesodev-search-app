import React from 'react';
// Styles
import styles from './News.module.css';
import utilsStyles from '../../styles/utils.module.css';
// Assets
import rightArrow from '../../assets/right-arrow.svg';
import leftArrow from '../../assets/left-arrow.svg';
import newsSrc from '../../assets/news.png';

const News = () => {
    //Style Variables
    const { title } = utilsStyles;
    const { newsBox, listBox, arrowIcon, newsList, newsItem, newsTitle, newsDecs } = styles;

    return (
        <section className={newsBox}>
            <h1 className={title}>Top News</h1>
            <div className={listBox}>
                <a className={arrowIcon} href>
                    <img src={leftArrow} alt="arrow" />
                </a>
                <ul className={newsList}>
                    <li className={newsItem}>
                        <img src={newsSrc} alt='news' />
                        <h3 className={newsTitle}>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
                        <span className={newsDecs}>1h ago · by Troy Corlson</span>
                    </li>
                    <li className={newsItem}>
                        <img src={newsSrc} alt='news' />
                        <h3 className={newsTitle}>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
                        <span className={newsDecs}>1h ago · by Troy Corlson</span>
                    </li>
                    <li className={newsItem}>
                        <img src={newsSrc} alt='news' />
                        <h3 className={newsTitle}>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
                        <span className={newsDecs}>1h ago · by Troy Corlson</span>
                    </li>
                </ul>
                <a className={arrowIcon} href>
                    <img src={rightArrow} alt="arrow" />
                </a>
            </div>
        </section>
    );
};

export default News;