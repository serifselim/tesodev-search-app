import React from 'react';
// Style
import styles from './Pagination.module.css';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, setCurrentPageData, setCurrentPageDecrease, setCurrentPageIncrease } from '../../features/searchSlice';
import PaginationButton from './PaginationButton';

const Pagination = () => {
    //Stlye Variables 
    const { pagBox, pagItem, pagBtn, pagList, pagBtnLg, pagDot } = styles;

    // Redux
    const { currentPage, totalPage } = useSelector(state => state.search);
    const dispatch = useDispatch();
    // Constants
    const paginationArr = Array.apply(0, Array(totalPage)); // pagination arrayini bir arraye çevirdik çünkü bunu daha sonra dönmemiz gerekecek 

    const handleClick = e => { // Tıklama eventi gerçekleştiğinde eğer aktif sayfa üzerinde değilsek pagination işlemini başlatmak için redux ile bağlantı kurulacak
        const reqPage = e.target.value;
        if (reqPage !== currentPage) {
            dispatch(setCurrentPage(reqPage));
            dispatch(setCurrentPageData());
        }
    };

    const decreaseCurrentPage = () => {  // Birer birer mevcut sayfamızı azaltmayı sağlar
        if (currentPage > 1) {
            dispatch(setCurrentPageDecrease());
        }
    };
    const increaseCurrentPage = () => { // Birer birer mevcut sayfamızı arttırmamızı sağlar
        if (currentPage < totalPage) {
            dispatch(setCurrentPageIncrease());
        }
    };

    const normalPaginationList = paginationArr.map((x, i) => ( // 6 sayfadan küçük olması durumunda normal pagination işlemi görüntülenecek
        <PaginationButton
            pageValue={i + 1}
            handleClick={handleClick}
        />
    ));

    const morePaginationListFirst = paginationArr.map((x, i) => { // 6 Sayfadan büyük olduğu durumda ilk 3 sayı gösterilecek
        if ((i - 1) <= 1) {
            return (
                <PaginationButton
                    pageValue={i + 1}
                    handleClick={handleClick}
                />
            );
        }
    });

    const morePaginationListLast = paginationArr.map((x, i) => { // 6 Sayfadan büyük olduğu durumda son 3 sayı gösterilecek
        if ((i - 1) >= (totalPage - 4)) {
            return (
                <PaginationButton
                    pageValue={i + 1}
                    handleClick={handleClick}
                />
            );
        }
    });

    const MorePaginationListAll = () => { // ilk ve son kısımlarının üzerinde orta alanda bulunan bir show ikonu gösterilecek
        return (
            <>
                {morePaginationListFirst}
                <span className={pagDot}>...</span>
                {morePaginationListLast}
            </>
        );
    };
    return (
        <section className={pagBox}>
            <ul className={pagList}>
                <li className={pagItem}>
                    <button
                        className={`${pagBtn} ${pagBtnLg}`}
                        onClick={decreaseCurrentPage}
                    >
                        Previous
                    </button>
                </li>
                {totalPage <= 6 ? normalPaginationList : <MorePaginationListAll />}
                <li className={pagItem}>
                    <button
                        className={`${pagBtn} ${pagBtnLg}`}
                        onClick={increaseCurrentPage}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default Pagination;