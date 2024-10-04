import { Query, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import {
    LoansTypeFilterModalStateType,
    initialLoansTypeFilterModalState,
    IsLoansTypeModalOpenStateType,
    initialIsLoansTypeModalOpenState,
} from '@/types/Common/LoanFilterBarType/LoansTypeFilterModal.Type/loansTypeFilterModal.type';

const useLoansTypeFilterBarState = () => {
    const queryClient = useQueryClient();

    // [ 대출종류 모달 상태 ]
    const { data: isLoansTypeModalOpenState = initialIsLoansTypeModalOpenState } =
        useQuery<IsLoansTypeModalOpenStateType>({
            queryKey: [QUERY_KEYS.filterValue.isLoansTypeModalOpenState],
            queryFn: () => {
                const state = queryClient.getQueryData<IsLoansTypeModalOpenStateType>([
                    QUERY_KEYS.filterValue.isLoansTypeModalOpenState,
                ]);
                return state !== undefined ? state : initialIsLoansTypeModalOpenState;
            },
        });

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
                loansTypeFilterModalState: [...new Set([...oldState.loansTypeFilterModalState, newLoansTypeFilter])],
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
                    (f) => f !== removeLoansTypeFilter
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

    const setIsLoansTypeModalOpenState = (newLoansTypeModalOpenState: boolean) => {
        queryClient.setQueryData<IsLoansTypeModalOpenStateType>([QUERY_KEYS.filterValue.isLoansTypeModalOpenState], {
            isLoansTypeModalOpenState: newLoansTypeModalOpenState,
        });
    };

    return {
        loansTypeFilterModalState: loansTypeFilterModalState.loansTypeFilterModalState,
        isLoansTypeModalOpenState: isLoansTypeModalOpenState.isLoansTypeModalOpenState,
        addLoansTypeFilter,
        removeLoansTypeFilter,
        resetLoansTypeFilter,
        setIsLoansTypeModalOpenState,
    };
};
export default useLoansTypeFilterBarState;
