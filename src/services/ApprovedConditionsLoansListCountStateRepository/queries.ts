import { useQuery, UseQueryOptions, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import useLoansFilteringAndSortingList from '@/hooks/LoansFilteringAndSortingList/useLoansListFiltering';
import {
    LoansListCountStateType,
    initialLoansListCountState,
} from '@/types/ApprovedConditionsLoansListCountState/ApprovedConditionsLoansListCountState.type';

// [ 조건부 승인 대출 상품 건수 쿼리 ]
const useApprovedConditionsLoansListCountState = (options?: UseQueryOptions<LoansListCountStateType, Error>) => {
    const queryClient = useQueryClient();
    const { approvedConditionsLoansFilteringList } = useLoansFilteringAndSortingList();

    // approvedConditionsLoansFilteringList의 길이를 기반으로 쿼리 키 생성

    const { data: loansListCountState = initialLoansListCountState } = useQuery<LoansListCountStateType>({
        queryKey: QUERY_KEYS.loanValue.approvedConditionsLoansListCountState(
            approvedConditionsLoansFilteringList?.length ?? 0
        ),
        queryFn: () => {
            return { loansListCountState: approvedConditionsLoansFilteringList?.length ?? 0 };
        },
        enabled: true,
        staleTime: 0,
    });

    return { loansListCountState: loansListCountState.loansListCountState };
};

export default useApprovedConditionsLoansListCountState;
