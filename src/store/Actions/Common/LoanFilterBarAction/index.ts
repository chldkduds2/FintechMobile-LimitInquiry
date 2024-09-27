import { LoanFilterBarActionType } from '@/types/Common/LoanFilterBarType/loanFilterBar.type';

export const addFilter = (filter: string) => ({
    type: LoanFilterBarActionType.ADD_FILTER,
    payload: filter,
});

export const removeFilter = (filter: string) => ({
    type: LoanFilterBarActionType.REMOVE_FILTER,
    payload: filter,
});

export const resetFilters = () => ({
    type: LoanFilterBarActionType.RESET_FILTERS,
});
