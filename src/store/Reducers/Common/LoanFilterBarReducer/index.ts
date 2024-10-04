import { LoansFilterBarActionType } from '@/types/Common/LoanFilterBarType/loanFilterBar.type';

interface LoanFilterState {
    activeFilters: string[];
}

const initialState: LoanFilterState = {
    activeFilters: [],
};

const loanFilterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LoansFilterBarActionType.ADD_FILTER:
            return {
                ...state,
                activeFilters: [...new Set([...state.activeFilters, action.payload])],
            };
        case LoansFilterBarActionType.REMOVE_FILTER:
            return {
                ...state,
                activeFilters: state.activeFilters.filter((filter) => filter !== action.payload),
            };
        case LoansFilterBarActionType.RESET_FILTERS:
            return {
                ...state,
                activeFilters: [],
            };
        default:
            return state;
    }
};

export default loanFilterReducer;
