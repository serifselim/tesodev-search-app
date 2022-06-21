import React, { useState } from 'react';
import styles from './Order.module.css';
import orderSrc from '../../assets/order.png';

const Order = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { orderBox, orderBtn, orderList, orderItem, itemBtn } = styles;

    return (
        <div className={orderBox}>
            <button className={orderBtn}>
                <img src={orderSrc} alt='icon' />
                <span>Order By</span>
            </button>

            {!isOpen &&
                <ul className={orderList}>
                    <li className={orderItem}>
                        <button className={itemBtn}>Name ascending</button>
                    </li>
                    <li className={orderItem}>
                        <button className={itemBtn}>Name descending</button>
                    </li>
                    <li className={orderItem}>
                        <button className={itemBtn}>Year ascending</button>
                    </li>
                    <li className={orderItem}>
                        <button className={itemBtn}>Year descending</button>
                    </li>
                </ul>
            }
        </div>
    );
};

export default Order;