import { LoanFilterBarActionType } from '@/types/Common/LoanFilterBarType/loanFilterBar.type';

interface LoanFilterState {
    activeFilters: string[];
}

const initialState: LoanFilterState = {
    activeFilters: [],
};

const loanFilterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LoanFilterBarActionType.ADD_FILTER:
            return {
                ...state,
                activeFilters: [...new Set([...state.activeFilters, action.payload])],
            };
        case LoanFilterBarActionType.REMOVE_FILTER:
            return {
                ...state,
                activeFilters: state.activeFilters.filter((filter) => filter !== action.payload),
            };
        case LoanFilterBarActionType.RESET_FILTERS:
            return {
                ...state,
                activeFilters: [],
            };
        default:
            return state;
    }
};

export default loanFilterReducer;
