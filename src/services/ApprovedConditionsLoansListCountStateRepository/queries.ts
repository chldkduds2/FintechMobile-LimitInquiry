import { useQuery, UseQueryOptions, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import useApprovedConditionsLoansListDate from '@/services/ApprovedConditionsLoansDateRepository/queries';

// [ 조건부 승인 대출 상품 건수 쿼리 ]
const useApprovedConditionsLoansListCountState = (options?: UseQueryOptions<number, Error>) => {
    const queryClient = useQueryClient();
    const { data: approvedConditionsLoanListDate, isLoading, error } = useApprovedConditionsLoansListDate();

    return useQuery<number>({
        queryKey: [QUERY_KEYS.loanValue.approvedConditionsLoansListCountState],
        queryFn: () => {
            const loansListCountState = queryClient.getQueryData<number>([
                QUERY_KEYS.loanValue.approvedConditionsLoansListCountState,
            ]);

            return loansListCountState !== undefined
                ? loansListCountState
                : (approvedConditionsLoanListDate?.length ?? 0);
        },
        enabled: !!approvedConditionsLoanListDate && !isLoading && !error,
    });
};
export default useApprovedConditionsLoansListCountState;
