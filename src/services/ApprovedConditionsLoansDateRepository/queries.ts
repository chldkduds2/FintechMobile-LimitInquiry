import { useQuery, UseQueryOptions, useQueryClient } from '@tanstack/react-query';
import ApprovedConditionsLoansDateApi from '@/services/ApprovedConditionsLoansDateRepository/api';
import { LoansApply } from '@/types/ApprovedConditionsLoansDateType/approvedConditionsLoansDate.type';
import { QUERY_KEYS } from '@/services/queryKey';

// [ 조건부 승인 대출 상품 리스트 쿼리 ]
const useApprovedConditionsLoansListDate = (status: string, options?: UseQueryOptions<LoansApply[], Error>) => {
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [QUERY_KEYS.loanValue.approvedConditionsLoansListState, status],
        queryFn: async () => {
            const data = await ApprovedConditionsLoansDateApi.getApprovedConditionsLoanListDateAPI(status);
            queryClient.setQueryData(
                QUERY_KEYS.loanValue.approvedConditionsLoansListCountState(data.length),
                data.length
            );
            return data;
        },
        enabled: true,
        staleTime: 0,
        ...options,
    });
};

export default useApprovedConditionsLoansListDate;
