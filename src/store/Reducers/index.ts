import { combineReducers } from 'redux';
import loanFilterReducer from './Common/LoanFilterBarReducer';

const rootReducer = combineReducers({
    loanFilter: loanFilterReducer,
    // 다른 리듀서가 있으면 여기에 추가
});

export default rootReducer;
