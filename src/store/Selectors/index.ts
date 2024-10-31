import { RootState } from '@/store';

export const selectCurrentPositionState = (state: RootState) => state.currentPositionState.currentPositionState;

export const selectLoansFilterBarState = (state: RootState) => state.loansFilterBarState.loansFilterBarState || [];

export const selectLoansTypeFilterBarState = (state: RootState) =>
    state.loansTypeFilterModalState.loansTypeFilterModalState || [];

export const selectLoansListSortState = (state: RootState) => state.loansListSortState.isRateSortState;

export const selectIsLoansTypeModalOpenState = (state: RootState) => state.modalOpenState.isLoansTypeModalOpenState;

export const selectNotApprovedLoansDataModalOpenState = (state: RootState) =>
    state.modalOpenState.notApprovedLoansDataModalOpenState;
