import React, { useState } from 'react';
// Style
import styles from './Pagination.module.css';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, setCurrentPageData, setCurrentPageDecrease, setCurrentPageIncrease } from '../../features/searchSlice';
import PaginationButton from './PaginationButton';

const Pagination = () => {
    // Hooks
    const [isMore, setIsMore] = useState(false);

    //Stlye Variables 
    const { pagBox, pagItem, pagBtn, pagList, pagBtnLg, pagDot } = styles;

    // Redux
    const { currentPage, totalPage } = useSelector(state => state.search);
    const dispatch = useDispatch();
    // Constants
    const paginationArr = Array.apply(0, Array(totalPage));

    const handleClick = e => {
        const reqPage = e.target.value;
        if (reqPage !== currentPage) {
            dispatch(setCurrentPage(reqPage));
            dispatch(setCurrentPageData());
        }
    };

    const decreaseCurrentPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPageDecrease());
        }
    };
    const increaseCurrentPage = () => {
        if (currentPage < totalPage) {
            dispatch(setCurrentPageIncrease());
        }
    };

    const normalPaginationList = paginationArr.map((x, i) => (
        <PaginationButton
            pageValue={i + 1}
            handleClick={handleClick}
        />
    ));

    const morePaginationList = paginationArr.map((x, i) => {
        const page = totalPage;
        if (page <= 3) {
            return (
                <PaginationButton
                    pageValue={i + 1}
                    handleClick={handleClick}
                />
            );
        }
        if (page >= (totalPage - 2)) {
            return (
                <PaginationButton
                    pageValue={i + 1}
                    handleClick={handleClick}
                />
            );
        }
    });

    const morePaginationListFirst = paginationArr.map((x, i) => {
        if ((i - 1) <= 1) {
            return (
                <PaginationButton
                    pageValue={i + 1}
                    handleClick={handleClick}
                />
            );
        }
    });

    const morePaginationListLast = paginationArr.map((x, i) => {
        if ((i - 1) >= (totalPage - 4)) {
            return (
                <PaginationButton
                    pageValue={i + 1}
                    handleClick={handleClick}
                />
            );
        }
    });

    const MorePaginationListAll = () => {
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