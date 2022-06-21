import React from 'react';
// Styles
import styles from './Add.module.css';
import utilsStyles from '../../styles/utils.module.css';

const Add = () => {
    // Styles Variables
    const { container, addBox, addForm, addLabel } = styles;
    const { input, btn } = utilsStyles;

    return (
        <main className={container}>
            <div className={addBox}>
                <form className={addForm}>
                    <label className={addLabel}>Name Surname</label>
                    <input required className={input} placeholder='Enter name and surname' />
                    <label className={addLabel}>Country</label>
                    <input required className={input} placeholder='Enter a country' />
                    <label className={addLabel}>Name Surname</label>
                    <input required className={input} placeholder='Enter a city' />
                    <label className={addLabel}>Name Surname</label>
                    <input required type='email' className={input} placeholder='Enter an e-mail(abc@xyz.com)' />
                    <button className={btn}>Add</button>
                </form>
            </div>
        </main>
    );
};

export default Add;