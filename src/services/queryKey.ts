export const QUERY_KEYS = {
    loanValue: {
        LoansListState: (status: string) => ['LoansListDateState', status],
        LoansListCountState: (LoansFilteringListLength: number) => [
            'LoansListCountDateState',
            LoansFilteringListLength,
        ],
    },

    sortValue: {
        isRateSortState: 'isRateSortState',
    },
    filterValue: {
        loansFilterBarState: 'loansFilterBarState',
        loansTypeFilterModalState: 'loansTypeFilterModalState',
        modalOpenState: 'modalOpenState',
    },
};
