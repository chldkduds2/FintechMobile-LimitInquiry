import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = 0;

const positionSlice = createSlice({
    name: 'positionState',
    initialState,
    reducers: {
        setPosition: (state, action: PayloadAction<number>) => action.payload,
    },
});

export const { setPosition } = positionSlice.actions;

export default positionSlice.reducer;
