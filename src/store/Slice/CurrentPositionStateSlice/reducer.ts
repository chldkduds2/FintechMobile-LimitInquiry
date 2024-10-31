import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialPositionState } from '@/types/PositionStateType/positionStateType.type';

const currentPositionStateSlice = createSlice({
    name: 'currentPositionState',
    initialState: initialPositionState,
    reducers: {
        setCurrentPositionState: (state, action: PayloadAction<number>) => {
            state.currentPositionState = action.payload;
        },
    },
});

export const { setCurrentPositionState } = currentPositionStateSlice.actions;

export default currentPositionStateSlice.reducer;
