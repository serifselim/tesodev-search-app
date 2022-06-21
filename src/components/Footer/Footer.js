import React from 'react';
// Styles
import styles from './Footer.module.css';
//Assets
import footerSrc from '../../assets/footer.png';
import Information from './Information';
import Location from './Location';

const Footer = () => {
    //Style Variables
    const { footerBox, footerContent } = styles;

    return (
        <section className={footerBox}>
            <div className={footerContent}>
                <img src={footerSrc} alt='footer' />
                <Information />
                <Location />
            </div>
        </section >
    );
};

export default Footer;