import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoansTypeFilterModalStateType } from '@/types/Common/LoanFilterBarType/LoansTypeFilterModalType/loansTypeFilterModal.type';

const initialState: LoansTypeFilterModalStateType = {
    loansTypeFilterModalState: [],
};

const loansTypeFilterSlice = createSlice({
    name: 'loansTypeFilter',
    initialState,
    reducers: {
        addLoansTypeFilter: (state, action: PayloadAction<string>) => {
            state.loansTypeFilterModalState.push(action.payload);
        },
        removeLoansTypeFilter: (state, action: PayloadAction<string>) => {
            state.loansTypeFilterModalState = state.loansTypeFilterModalState.filter(
                (loanType) => loanType !== action.payload
            );
        },
        resetLoansTypeFilter: (state) => {
            state.loansTypeFilterModalState = [];
        },
    },
});

export const { addLoansTypeFilter, removeLoansTypeFilter, resetLoansTypeFilter } = loansTypeFilterSlice.actions;
export default loansTypeFilterSlice.reducer;
