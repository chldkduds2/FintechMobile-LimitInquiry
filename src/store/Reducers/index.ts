import { combineReducers } from 'redux';
import PositionReducer from '@/store/Reducers/Common/PositionReducer';
import loansTypeFilterReducer from '@/store/Reducers/LoansTypeFilterModalStateReducer';

const rootReducer = combineReducers({
    position: PositionReducer,
    loansTypeFilter: loansTypeFilterReducer,
});

export default rootReducer;
