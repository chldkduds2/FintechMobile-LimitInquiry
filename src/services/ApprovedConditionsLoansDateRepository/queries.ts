import { useQuery, UseQueryOptions, useQueryClient } from '@tanstack/react-query';
import ApprovedConditionsLoansDateApi from '@/services/ApprovedConditionsLoansDateRepository/api';
import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import { QUERY_KEYS } from '@/services/queryKey';

// [ 조건부 승인 대출 상품 리스트 쿼리 ]
const useApprovedConditionsLoansListDate = (options?: UseQueryOptions<LoansApply[], Error>) => {
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [QUERY_KEYS.loanValue.approvedConditionsLoansListState],
        queryFn: async () => {
            const data = await ApprovedConditionsLoansDateApi.getApprovedConditionsLoanListDateAPI();

            // 첫번째 인자 : 쿼리 키(인자로 데이터를 넣어주어 쿼리 키 값을 올바르게 ), 두번째 인자 : 쿼리 키 값
            queryClient.setQueryData(
                QUERY_KEYS.loanValue.approvedConditionsLoansListCountState(data.length),
                data.length
            );
            return data;
        },
        enabled: true,
        staleTime: 0,
    });
};

export default useApprovedConditionsLoansListDate;
