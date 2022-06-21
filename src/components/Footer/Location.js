import React from 'react';
import styles from './Footer.module.css';
import locationSrc from '../../assets/location.png';

const Location = () => {
    const { footerLoc } = styles;

    return (
        <div className={footerLoc}>
            <img src={locationSrc} alt='location' height={222} />
        </div>
    );
};

export default Location;