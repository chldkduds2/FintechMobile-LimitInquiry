import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import ApprovedConditionsLoansDateApi from '@/services/ApprovedConditionsLoansDateRepository/api';
import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import { QUERY_KEYS } from '@/services/queryKey';
import useLoansListSortState from '@/services/LoansListSortStateRepository/queries';

// [ 조건부 승인 대출 상품 리스트 쿼리 ]
const useApprovedConditionsLoansListDate = (options?: UseQueryOptions<LoansApply[], Error>) => {
    const { isRateSortState } = useLoansListSortState();

    return useQuery({
        queryKey: [QUERY_KEYS.loanValue.approvedConditionsLoansListState, isRateSortState],
        queryFn: async () => {
            const data = await ApprovedConditionsLoansDateApi.getApprovedConditionsLoanListDateAPI(!!isRateSortState);
            return data;
        },
        enabled: isRateSortState !== undefined,
    });
};
export default useApprovedConditionsLoansListDate;
