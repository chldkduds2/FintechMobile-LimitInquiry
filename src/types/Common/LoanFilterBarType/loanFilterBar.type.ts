export type LoansFilterType = '대출종류' | '1금융' | '중도상환수수료 없음' | '계좌개설 없음' | '오늘입금';

export type LoansTypeFilterType = '신용대출' | '주택 담보대출' | '자동차 담보대출' | '대환대출';

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
