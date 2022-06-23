import React from 'react';
//Styles
import styles from './Search.module.css';
import utilsStyles from '../../styles/utils.module.css';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setFilterArrWithText, setSearchText } from '../../features/searchSlice';
//Assets
import searchIcon from '../../assets/search.svg';

const Search = ({ home }) => {
    // Style Variables
    const { input, btn } = utilsStyles;
    const { form, icon, homeInput } = styles;
    // Redux
    const { searchText } = useSelector(state => state.search);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setFilterArrWithText());
    };

    return (
        <form onSubmit={handleSubmit} className={form}>
            {home && <img src={searchIcon} alt='icon' className={icon} />}
            <input
                placeholder='Search'
                value={searchText}
                onChange={(e) => dispatch(setSearchText(e.target.value))}
                className={`${input} ${home && homeInput}`}
                required
            />
            <button className={btn} >Search</button>
        </form>
    );
};

export default Search;