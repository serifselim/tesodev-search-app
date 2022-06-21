import React from 'react';
// Styles
import styles from './List.module.css';
// Assets
import ListItem from './ListItem';

const List = () => {
    // Style Variables
    const { resultList, line } = styles;

    return (
        <ul className={resultList}>
            <ListItem />
            <hr className={line} />
            <ListItem />
            <hr className={line} />
            <ListItem />
            <hr className={line} />
            <ListItem />
            <hr className={line} />
            <ListItem />
        </ul>
    );
};

export default List;