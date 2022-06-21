import React from 'react';
import styles from './Footer.module.css';

const Information = () => {
    const { footerInf, contact } = styles;

    return (
        <div className={footerInf}>
            <p className={contact}>
                <strong>İletişim</strong><br />
                Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul <br /><br /><br />
                <strong>Email: bilgi@tesodev.com</strong>
            </p>
        </div>
    );
};

export default Information;