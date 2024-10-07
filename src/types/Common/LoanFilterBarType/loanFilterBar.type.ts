export type LoansFilterType = '대출종류' | '1금융' | '중도상환수수료 없음' | '계좌개설 없음' | '오늘입금';

export enum LoansFilterBarActionType {
    ADD_FILTER = 'ADD_FILTER',
    REMOVE_FILTER = 'REMOVE_FILTER',
    RESET_FILTERS = 'RESET_FILTERS',
}

export interface LoansFilterBarStateType {
    loansFiterBarState: string[];
}
export const initialLoanFilterBarState: LoansFilterBarStateType = {
    loansFiterBarState: [],
};
