import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import {
    LoansFilterBarStateType,
    initialLoanFilterBarState,
} from '@/types/Common/LoanFilterBarType/loanFilterBar.type';

const useLoansFilterBarState = () => {
    const queryClient = useQueryClient();

    // [ 필터값 상태 ]
    const { data: loansFilterBarState = initialLoanFilterBarState } = useQuery<LoansFilterBarStateType>({
        queryKey: [QUERY_KEYS.filterValue.loansFilterBarState],
        queryFn: () => {
            const state = queryClient.getQueryData<LoansFilterBarStateType>([
                QUERY_KEYS.filterValue.loansFilterBarState,
            ]);
            return state !== undefined ? state : initialLoanFilterBarState;
        },
    });

    // [ 필터값 추가 함수 ]
    const addFilter = (newFilter: string) => {
        queryClient.setQueryData<LoansFilterBarStateType>(
            [QUERY_KEYS.filterValue.loansFilterBarState],
            (oldState = initialLoanFilterBarState) => ({
                ...oldState,
                loansFiterBarState: [...new Set([...oldState.loansFilterBarState, newFilter])],
            })
        );
    };

    // [ 필터값 삭제 함수 ]
    const removeFilter = (removeFilter: string) => {
        queryClient.setQueryData<LoansFilterBarStateType>(
            [QUERY_KEYS.filterValue.loansFilterBarState],
            (oldState = initialLoanFilterBarState) => ({
                ...oldState,
                loansFiterBarState: oldState.loansFilterBarState.filter((f) => f !== removeFilter),
            })
        );
    };

    // [ 필터값 초기화 함수 ]
    const resetFilter = () => {
        queryClient.setQueryData<LoansFilterBarStateType>([QUERY_KEYS.filterValue.loansFilterBarState], {
            loansFilterBarState: [],
        });
    };

    return {
        loansFilterBarState: loansFilterBarState.loansFilterBarState,
        addFilter,
        removeFilter,
        resetFilter,
    };
};
export default useLoansFilterBarState;
