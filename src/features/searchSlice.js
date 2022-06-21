import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: '',
};

export const searchSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
});

export const { } = searchSlice.actions;

export default searchSlice.reducer;