import React from 'react';
// Assets
import logoSrc from '../../assets/logo.png';
//Styles
import styles from './Home.module.css';

const Logo = () => {
    // Style Variables
    const { logoBox } = styles;

    return (
        <section className={logoBox}>
            <img src={logoSrc} alt='logo' height={115} />
        </section>
    );
};

export default Logo;