import { configureStore } from '@reduxjs/toolkit';
import PositionStateReducer from './Slice/PositionSlice/reducer';
import LoansFilterBarStateReducer from './Slice/LoansFilterBarStateSlice/reducer';
import LoansTypeFilterBarModalStateReducer from './Slice/LoansFilterBarStateSlice/LoansTypeFilterBarModalStateSlice/reducer';
import LoansListSortStateReducer from './Slice/LoansListSortStateSlice/reducer';
import ModalOpenStateReducer from './Slice/ModalOpenStateSlice/reducer';

const store = configureStore({
    reducer: {
        positionState: PositionStateReducer,
        loansFilterBarState: LoansFilterBarStateReducer,
        loansTypeFilterModalState: LoansTypeFilterBarModalStateReducer,
        loansListSortState: LoansListSortStateReducer,
        modalOpenState: ModalOpenStateReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
