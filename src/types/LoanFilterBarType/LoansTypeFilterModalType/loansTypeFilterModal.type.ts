export type LoansTypeFilterType = '신용대출' | '주택담보대출' | '자동차담보대출' | '대환대출';

export enum LoansTypeFilterModalActionType {
    ADD_FILTER = 'ADD_FILTER',
    REMOVE_FILTER = 'REMOVE_FILTER',
    RESET_FILTERS = 'RESET_FILTERS',
}

export interface LoansTypeFilterModalStateType {
    loansTypeFilterModalState: string[];
}
export const initialLoansTypeFilterModalState: LoansTypeFilterModalStateType = {
    loansTypeFilterModalState: [],
};
