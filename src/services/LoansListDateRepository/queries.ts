import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import LoansListDateApi from '@/services/LoansListDateRepository/api';
import { LoansApply } from '@/types/LoansListDateType/loansListDate.type';
import { QUERY_KEYS } from '@/services/queryKey';

// [ 대출 상품 리스트 쿼리 ]
const useLoansListDate = (status: string, options?: UseQueryOptions<LoansApply[], Error>) => {
    return useQuery({
        queryKey: QUERY_KEYS.loanValue.LoansListState(status),
        queryFn: async () => {
            const data = await LoansListDateApi.getLoanListDateAPI();
            // status : [ 대출 거절 -> condition_rejecte || 오류 -> condition_failed || 대출 승인 -> condition_approved ]
            return data.filter((item) => item.status === status);
        },
    });
};

export default useLoansListDate;
