import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import {
    LoansTypeFilterModalStateType,
    initialLoansTypeFilterModalState,
} from '@/types/Common/LoanFilterBarType/LoansTypeFilterModalType/loansTypeFilterModal.type';

const useLoansTypeFilterBarState = () => {
    const queryClient = useQueryClient();

    // [대출종류 필터링 상태 ]
    const { data: loansTypeFilterModalState = initialLoansTypeFilterModalState } =
        useQuery<LoansTypeFilterModalStateType>({
            queryKey: [QUERY_KEYS.filterValue.loansTypeFilterModalState],
            queryFn: () => {
                const state = queryClient.getQueryData<LoansTypeFilterModalStateType>([
                    QUERY_KEYS.filterValue.loansTypeFilterModalState,
                ]);
                return state !== undefined ? state : initialLoansTypeFilterModalState;
            },
        });

    // [ 대출상품 필터값 추가 함수 ]
    const addLoansTypeFilter = (newLoansTypeFilter: string) => {
        queryClient.setQueryData<LoansTypeFilterModalStateType>(
            [QUERY_KEYS.filterValue.loansTypeFilterModalState],
            (oldState = initialLoansTypeFilterModalState) => ({
                ...oldState,
                loansTypeFilterModalState: [...oldState.loansTypeFilterModalState, newLoansTypeFilter],
            })
        );
    };

    // [ 대출상품 필터값 삭제 함수 ]
    const removeLoansTypeFilter = (removeLoansTypeFilter: string) => {
        queryClient.setQueryData<LoansTypeFilterModalStateType>(
            [QUERY_KEYS.filterValue.loansTypeFilterModalState],
            (oldState = initialLoansTypeFilterModalState) => ({
                ...oldState,
                loansTypeFilterModalState: oldState.loansTypeFilterModalState.filter(
                    (loanType) => loanType !== removeLoansTypeFilter
                ),
            })
        );
    };

    // [ 대출상품 필터값 초기화 함수 ]
    const resetLoansTypeFilter = () => {
        queryClient.setQueryData<LoansTypeFilterModalStateType>([QUERY_KEYS.filterValue.loansTypeFilterModalState], {
            loansTypeFilterModalState: [],
        });
    };

    return {
        loansTypeFilterModalState: loansTypeFilterModalState.loansTypeFilterModalState,
        addLoansTypeFilter,
        removeLoansTypeFilter,
        resetLoansTypeFilter,
    };
};

export default useLoansTypeFilterBarState;
