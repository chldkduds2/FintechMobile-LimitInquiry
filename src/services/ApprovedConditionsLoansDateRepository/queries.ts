import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import ApprovedConditionsLoansDateApi from '@/services/ApprovedConditionsLoansDateRepository/api';
import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import { QUERY_KEYS } from '@/services/queryKey';

// [ 조건부 승인 대출 상품 리스트 쿼리 ]
const useApprovedConditionsLoansListDate = (options?: UseQueryOptions<LoansApply[], Error>) => {
    return useQuery({
        queryKey: [QUERY_KEYS.loanValue.approvedConditionsLoansListState],
        queryFn: async () => {
            const data = await ApprovedConditionsLoansDateApi.getApprovedConditionsLoanListDateAPI();
            return data;
        },
        enabled: true,
        staleTime: 0,
    });
};
export default useApprovedConditionsLoansListDate;
