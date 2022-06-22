import React from 'react';
// Styles
import styles from './List.module.css';
// Assets
import ListItem from './ListItem';
// Redux
import { useSelector } from 'react-redux';

const List = () => {
    // Style Variables
    const { resultList, line } = styles;
    // States
    const { currentPageData } = useSelector(state => state.search);

    return (
        <ul className={resultList}>
            {
                currentPageData.map(item => (
                    <>
                        <ListItem
                            nameSurname={item[0]}
                            company={item[1]}
                            date={item[3]}
                            country={item[4]}
                            city={item[5]}
                        />
                        <hr className={line} />
                    </>
                ))
            }
        </ul>
    );
};

export default List;