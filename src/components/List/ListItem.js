import React from 'react';
// Styles
import styles from './List.module.css';
// Assets
import navigationSrc from '../../assets/navigation.svg';

const ListItem = () => {
    // Style Variables
    const { resultItem, iconBox, infBox, title, decs, dateAuth, date } = styles;

    return (
        <li className={resultItem}>
            <div className={iconBox}>
                <img src={navigationSrc} alt='icon' height={22} />
            </div>
            <div className={infBox}>
                <span className={title}>18th Street Brewery</span>
                <span className={decs}>Oakley Avenue, Hammond, IN</span>
            </div>
            <div className={dateAuth}>
                <span className={title}>Jane Doe</span>
                <span className={date}>01/20/2021</span>
            </div>
        </li>
    );
};

export default ListItem;