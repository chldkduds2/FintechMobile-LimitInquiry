import { RootState } from '@/store';

export const selectPositionState = (state: RootState) => state.positionState;

export const selectLoansFilterBarState = (state: RootState) => state.loansFilterBarState.loansFilterBarState || [];

export const selectLoansTypeFilterBarState = (state: RootState) =>
    state.loansTypeFilterModalState.loansTypeFilterModalState || [];

export const selectLoansListSortState = (state: RootState) => state.loansListSortState.isRateSortState;

export const selectIsLoansTypeModalOpenState = (state: RootState) => state.modalOpenState.isLoansTypeModalOpenState;

export const selectNotApprovedLoansDataModalOpenState = (state: RootState) =>
    state.modalOpenState.notApprovedLoansDataModalOpenState;
