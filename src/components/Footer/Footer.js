import React from 'react';
// Styles
import styles from './Footer.module.css';
//Assets
import footerSrc from '../../assets/footer.png';
import Information from './Information';
import Location from './Location';

const Footer = () => {
    //Style Variables
    const { footerBox, footerContent, footerImgBox, footerImg, locationBox, informationBox } = styles;

    return (
        <section className={footerBox}>
            <div className={footerContent}>
                <div className={footerImgBox}>
                    <img className={footerImg} src={footerSrc} alt='footer' />
                </div>
                <div className={informationBox}>
                    <Information />
                </div>
                <div className={locationBox}>
                    <Location />
                </div>
            </div>
        </section >
    );
};

export default Footer;