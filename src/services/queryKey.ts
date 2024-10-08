export const QUERY_KEYS = {
    loanValue: {
        approvedConditionsLoansListState: 'approvedConditionsLoansListDateState',
        approvedConditionsLoansListCountState: (approvedConditionsLoansFilteringListLength: number) => [
            'approvedConditionsLoansListCountDateState',
            `LoansFilteringListLength : ${approvedConditionsLoansFilteringListLength}`,
        ],
    },
    sortValue: {
        isRateSortState: 'isRateSortState',
    },
    filterValue: {
        loansFiterBarState: 'loansFiterBarState',
        loansTypeFilterModalState: 'loansTypeFilterModalState',
        modalOpenState: 'modalOpenState',
    },
};
