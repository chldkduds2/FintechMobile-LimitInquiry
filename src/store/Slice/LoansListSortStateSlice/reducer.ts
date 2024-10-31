import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialIsRateSortState } from '@/types/LoansListSortStateType/loansListSortState.type';

const loansListSortStateSlice = createSlice({
    name: 'loansListSortState',
    initialState: initialIsRateSortState,
    reducers: {
        setIsRateSortState(state, action: PayloadAction<boolean>) {
            state.isRateSortState = action.payload;
        },
    },
});

export const { setIsRateSortState } = loansListSortStateSlice.actions;
export default loansListSortStateSlice.reducer;
