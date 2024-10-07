import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import {
    LoansFilterBarStateType,
    initialLoanFilterBarState,
} from '@/types/Common/LoanFilterBarType/loanFilterBar.type';

const useLoansFilterBarState = () => {
    const queryClient = useQueryClient();

    // [ 필터값 상태 ]
    const { data: loansFiterBarState = initialLoanFilterBarState } = useQuery<LoansFilterBarStateType>({
        queryKey: [QUERY_KEYS.filterValue.loansFiterBarState],
        queryFn: () => {
            const state = queryClient.getQueryData<LoansFilterBarStateType>([
                QUERY_KEYS.filterValue.loansFiterBarState,
            ]);
            return state !== undefined ? state : initialLoanFilterBarState;
        },
    });

    // [ 필터값 추가 함수 ]
    const addFilter = (newFilter: string) => {
        queryClient.setQueryData<LoansFilterBarStateType>(
            [QUERY_KEYS.filterValue.loansFiterBarState],
            (oldState = initialLoanFilterBarState) => ({
                ...oldState,
                loansFiterBarState: [...new Set([...oldState.loansFiterBarState, newFilter])],
            })
        );
    };

    // [ 필터값 삭제 함수 ]
    const removeFilter = (removeFilter: string) => {
        queryClient.setQueryData<LoansFilterBarStateType>(
            [QUERY_KEYS.filterValue.loansFiterBarState],
            (oldState = initialLoanFilterBarState) => ({
                ...oldState,
                loansFiterBarState: oldState.loansFiterBarState.filter((f) => f !== removeFilter),
            })
        );
    };

    // [ 필터값 초기화 함수 ]
    const resetFilter = () => {
        queryClient.setQueryData<LoansFilterBarStateType>([QUERY_KEYS.filterValue.loansFiterBarState], {
            loansFiterBarState: [],
        });
    };

    return {
        loansFiterBarState: loansFiterBarState.loansFiterBarState,
        addFilter,
        removeFilter,
        resetFilter,
    };
};
export default useLoansFilterBarState;
