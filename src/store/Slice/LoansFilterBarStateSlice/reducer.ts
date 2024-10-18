import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialLoanFilterBarState } from '@/types/Common/LoanFilterBarType/loanFilterBar.type';

const loansFilterBarStateSlice = createSlice({
    name: 'loansFilterBarState',
    initialState: initialLoanFilterBarState,
    reducers: {
        addFilter: (state, action: PayloadAction<string>) => {
            if (!state.loansFilterBarState.includes(action.payload)) {
                state.loansFilterBarState.push(action.payload);
            }
        },
        removeFilter: (state, action: PayloadAction<string>) => {
            state.loansFilterBarState = state.loansFilterBarState.filter((filter) => filter !== action.payload);
        },
        resetFilter: (state) => {
            state.loansFilterBarState = [];
        },
    },
});

export const { addFilter, removeFilter, resetFilter } = loansFilterBarStateSlice.actions;
export default loansFilterBarStateSlice.reducer;
