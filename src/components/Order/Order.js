import React, { useState } from 'react';
import styles from './Order.module.css';
import orderSrc from '../../assets/order.png';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilterArrBySort } from '../../features/searchSlice';

const Order = () => {
    // Hooks
    const [isOpen, setIsOpen] = useState(false);

    // Styles
    const { orderBox, orderBtn, orderList, orderItem, itemBtn } = styles;

    // Redux
    const dispatch = useDispatch();

    // Constants
    const orderArr = [
        {
            text: 'Name ascending',
            value: 'nameAscend'
        },
        {
            text: 'Name descending',
            value: 'nameDescend'
        },
        {
            text: 'Year ascending',
            value: 'dateAscend'
        },
        {
            text: 'Year descending',
            value: 'dateDescend'
        }
    ];

    const handleClick = e => {
        const action = e.target.value;
        dispatch(updateFilterArrBySort(action));
    };

    return (
        <div className={orderBox}>
            <button className={orderBtn}>
                <img src={orderSrc} alt='icon' />
                <span>Order By</span>
            </button>

            {!isOpen &&
                <ul className={orderList}>
                    {orderArr.map((item, i) => (
                        <li key={i} className={orderItem}>
                            <button
                                onClick={handleClick}
                                value={item.value}
                                className={itemBtn}
                            >
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default Order;