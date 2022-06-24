import React from 'react';
// Styles
import styles from './News.module.css';
import utilsStyles from '../../styles/utils.module.css';
// Assets
import rightArrow from '../../assets/right-arrow.svg';
import leftArrow from '../../assets/left-arrow.svg';
import NewsList from './NewsList';
import Icon from './Icon';

const News = () => {
    //Style Variables
    const { title } = utilsStyles;
    const { newsBox, listBox, arrowIcon } = styles;

    return (
        <section className={newsBox}>
            <h1 className={title}>Top News</h1>
            <div className={listBox}>
                <Icon arrowSrc={leftArrow} className={arrowIcon} />
                <NewsList />
                <Icon arrowSrc={rightArrow} className={arrowIcon} />
            </div>
        </section>
    );
};

export default News;