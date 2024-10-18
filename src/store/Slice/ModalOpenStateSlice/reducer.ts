import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialModalOpenState } from '@/types/ModalOpenStateType/modalOpenState.type';

const modalOpenStateSlice = createSlice({
    name: 'modalOpenState',
    initialState: initialModalOpenState,
    reducers: {
        setIsLoansTypeModalOpenState(state, action: PayloadAction<boolean>) {
            state.isLoansTypeModalOpenState = action.payload;
        },
        setNotApprovedLoansDataModalOpenState(state, action: PayloadAction<boolean>) {
            state.notApprovedLoansDataModalOpenState = action.payload;
        },
    },
});

export const { setIsLoansTypeModalOpenState, setNotApprovedLoansDataModalOpenState } = modalOpenStateSlice.actions;
export default modalOpenStateSlice.reducer;
