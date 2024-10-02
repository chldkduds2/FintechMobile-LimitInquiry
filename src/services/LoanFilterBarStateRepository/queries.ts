import { Query, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import { LoanFilterBarStateType, initialLoanFilterBarState } from '@/types/Common/LoanFilterBarType/loanFilterBar.type';

const useLoanFilterBarState = () => {
    const queryClient = useQueryClient();

    const { data: loansFiterBarState = initialLoanFilterBarState } = useQuery<LoanFilterBarStateType>({
        queryKey: [QUERY_KEYS.filterValue.filterState],
        queryFn: () => {
            const state = queryClient.getQueryData<LoanFilterBarStateType>([QUERY_KEYS.filterValue.filterState]);
            return state !== undefined ? state : initialLoanFilterBarState;
        },
    });

    // [ 필터값 추가 함수 ]
    const addFilter = (newFilter: string) => {
        queryClient.setQueryData<LoanFilterBarStateType>(
            [QUERY_KEYS.filterValue.filterState],
            (oldState = initialLoanFilterBarState) => ({
                ...oldState,
                loansFiterBarState: [...new Set([...oldState.loansFiterBarState, newFilter])],
            })
        );
    };

    // [ 필터값 삭제 함수 ]
    const removeFilter = (removeFilter: string) => {
        queryClient.setQueryData<LoanFilterBarStateType>(
            [QUERY_KEYS.filterValue.filterState],
            (oldState = initialLoanFilterBarState) => ({
                ...oldState,
                loansFiterBarState: oldState.loansFiterBarState.filter((f) => f !== removeFilter),
            })
        );
    };

    // [ 필터값 초기화 함수 ]
    const resetFilter = () => {
        queryClient.setQueryData<LoanFilterBarStateType>([QUERY_KEYS.filterValue.filterState], {
            loansFiterBarState: [],
        });
    };

    return { loansFiterBarState: loansFiterBarState.loansFiterBarState, addFilter, removeFilter, resetFilter };
};
export default useLoanFilterBarState;
