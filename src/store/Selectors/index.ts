import { createSelector } from 'reselect';
import { RootState } from '@/store';

// 1. 페이지 스크롤 Y 위치 값 상태
export const selectCurrentPositionState = createSelector(
    (state: RootState) => state.currentPositionState.currentPositionState,
    (currentPositionState) => currentPositionState
);

// 2. 사용자가 선택한 필터링바 속성 상태
export const selectLoansFilterBarState = createSelector(
    (state: RootState) => state.loansFilterBarState.loansFilterBarState,
    (loansFilterBarState) => loansFilterBarState || []
);

// [ 3. 모달 오픈 상태 ]
// 3-1. 대출상품 종류 필터 모달 오픈 상태
export const selectIsLoansTypeModalOpenState = createSelector(
    (state: RootState) => state.modalOpenState.isLoansTypeModalOpenState,
    (isLoansTypeModalOpenState) => isLoansTypeModalOpenState
);

// 3-2. 승인 거절/오류 대출상품 리스트 모달 오픈 상태
export const selectNotApprovedLoansDataModalOpenState = createSelector(
    (state: RootState) => state.modalOpenState.notApprovedLoansDataModalOpenState,
    (notApprovedLoansDataModalOpenState) => notApprovedLoansDataModalOpenState
);

// 4. 사용자가 선택한 대출상품 종류 필터 모달 속성 상태
export const selectLoansTypeFilterBarState = createSelector(
    (state: RootState) => state.loansTypeFilterModalState.loansTypeFilterModalState,
    (loansTypeFilterModalState) => loansTypeFilterModalState || []
);

// 5. 대출상품 리스트 정렬 상태
export const selectLoansListSortState = createSelector(
    (state: RootState) => state.loansListSortState.isRateSortState,
    (isRateSortState) => isRateSortState
);
