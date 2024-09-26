import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import LimitInquiryResponse_ExampleApprovedConditionsDataApi from '@/services/ApprovedConditionsLoansDateRepository/api';
import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import { QUERY_KEYS } from '@/services/queryKey';

// [ 조건부 승인 대출 상품 리스트 쿼리 ]
export const useApprovedConditionsLoansListDate = (options?: UseQueryOptions<LoansApply[], Error>) => {
    return useQuery({
        queryKey: [QUERY_KEYS.loan.approvedConditionsLoansList],
        queryFn: () => LimitInquiryResponse_ExampleApprovedConditionsDataApi.getApprovedConditionsLoanListDateAPI(),
        ...options,
    });
};

// [ 조건부 승인 대출 상품 건수 쿼리 ]
export const useApprovedConditionsLoansListCountDate = (options?: UseQueryOptions<number, Error>) => {
    const { data: approvedConditionsLoanListDate, isLoading, error } = useApprovedConditionsLoansListDate();

    return useQuery({
        queryKey: [QUERY_KEYS.loan.approvedConditionsLoansListCount],
        queryFn: () => Promise.resolve(approvedConditionsLoanListDate ? approvedConditionsLoanListDate.length : 0),
        enabled: !!approvedConditionsLoanListDate && !isLoading && !error, // 데이터가 있을 때만 실행
        ...options,
    });
};
