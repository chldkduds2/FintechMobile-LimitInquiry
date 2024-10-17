import { configureStore } from '@reduxjs/toolkit';
import loansTypeFilterReducer from './Slice/loansTypeFilterModalStateSlice';

const store = configureStore({
    reducer: {
        loansTypeFilter: loansTypeFilterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
