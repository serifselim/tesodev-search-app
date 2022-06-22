import { createSlice } from '@reduxjs/toolkit';
import searchData from '../data/db.json';
import { dateLocaleCompare, nameLocaleCompare } from './utils';

const initialState = {
    searchArr: searchData.data,
    filterArr: searchData.data,
    currentPage: 1,
    maxShowItemPerPage: 5,
    totalPage: Math.ceil(searchData.data.length / 5),
    currentPageData: [],
    searchText: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchText: (state, { payload }) => {
            state.searchText = payload;
            state.currentPage = 1;

            if (!state.searchText) {
                state.filterArr = state.searchArr;
                state.totalPage = Math.ceil(state.filterArr.length / state.maxShowItemPerPage);
            }
        },
        setFilterArrWithText: state => {
            const { searchArr, searchText, maxShowItemPerPage } = state;

            state.filterArr = searchArr.filter(item => {
                const myText = searchText.toLowerCase().replace(/\s+/g, '');
                const arrText = item[1].toLowerCase().replace(/\s+/g, '');
                return arrText.includes(myText);
            });

            state.totalPage = Math.ceil(state.filterArr.length / maxShowItemPerPage);
        },
        updateFilterArrBySort: (state, { payload }) => {
            state.filterArr.sort((a, b) => {
                switch (payload) {
                    case 'nameAscend':
                        return nameLocaleCompare(a, b, true);
                    case 'nameDescend':
                        return nameLocaleCompare(a, b, false);
                    case 'dateAscend':
                        return dateLocaleCompare(a, b, true);
                    case 'dateDescend':
                        return dateLocaleCompare(a, b, false);
                    default:
                        return 0;
                }
            });
        },
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload;
        },
        setCurrentPageData: state => {
            const { currentPage, maxShowItemPerPage } = state;
            const startIndex = currentPage !== 1 ? (currentPage * maxShowItemPerPage - maxShowItemPerPage) : 0;
            const endIndex = startIndex + maxShowItemPerPage;
            state.currentPageData = state.filterArr.slice(startIndex, endIndex);
        },
        setCurrentPageDecrease: state => {
            state.currentPage--;
        },
        setCurrentPageIncrease: state => {
            state.currentPage++;
        },

    },
});

export const {
    setSearchText,
    setFilterArrWithText,
    setCurrentPage,
    setCurrentPageData,
    setCurrentPageDecrease,
    setCurrentPageIncrease,
    updateFilterArrBySort
} = searchSlice.actions;

export default searchSlice.reducer;