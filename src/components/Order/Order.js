import React, { useRef, useState, useEffect } from 'react';
import styles from './Order.module.css';
import orderSrc from '../../assets/order.png';
import { useDispatch } from 'react-redux';
import { updateFilterArrBySort } from '../../features/searchSlice';


const useClickOutside = (handler) => { // Aktif komponent dışına tıkladığımızı tespik etmemizi sağlayan fonksiyon
    const domNode = useRef();

    useEffect(() => {
        let mouseDownFunc = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener('mousedown', mouseDownFunc);

        return () => {
            document.removeEventListener('mousedown', mouseDownFunc);
        };
    });

    return domNode;
};
// Bu sayede order elementinden çıkmak istediğimiz durumda dışarı tıklamamız yetmektedir

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

    const handleClick = e => { // aksiyon tipine göre değiştirilecek değeri reduxa gönderiyoruz.
        const action = e.target.value;
        dispatch(updateFilterArrBySort(action));
    };

    const domNode = useClickOutside(() => { // Callback fonksiyonu ile boolean kontrolü sağlıyoruz
        setIsOpen(false);
    });

    return (
        <div className={orderBox}>
            <button onClick={() => setIsOpen(true)} className={orderBtn}>
                <img src={orderSrc} alt='icon' />
                <span>Order By</span>
            </button>

            {isOpen &&
                <ul ref={domNode} className={orderList}>
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