import React from 'react';
// Styles
import styles from './List.module.css';
// Assets
import navigationSrc from '../../assets/navigation.svg';

const ListItem = ({ nameSurname, company, date, country, city }) => {
    // Style Variables
    const { resultItem, iconBox, infBox, title, decs, dateAuth, dateText } = styles;

    return (
        <li className={resultItem}>
            <div className={iconBox}>
                <img src={navigationSrc} alt='icon' height={22} />
            </div>
            <div className={infBox}>
                <span className={title}>{company}</span>
                <span className={decs}>{country}, {city}</span>
            </div>
            <div className={dateAuth}>
                <span className={title}>{nameSurname}</span>
                <span className={dateText}>{date}</span>
            </div>
        </li>
    );
};

export default ListItem;