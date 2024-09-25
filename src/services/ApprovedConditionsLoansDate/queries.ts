import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import LimitInquiryResponse_ExampleApprovedConditionsDataApi from '@/services/ApprovedConditionsLoansDate/api';
import { QUERY_KEYS } from '@/services/queryKey';

// 조건부 승인 대출 상품 리스트 훅
export const useApprovedConditionsLoansListDate = (
    options?: UseQueryOptions<LoansApply[], Error, string[]> // 네 번째 제네릭 파라미터 제거
) => {
    return useQuery({
        queryKey: [QUERY_KEYS.loan.approvedConditionsLoansList],
        queryFn: () => LimitInquiryResponse_ExampleApprovedConditionsDataApi.getApprovedConditionsLoanListDateAPI(),
        ...options,
    });
};

// 조건부 승인 대출 상품 건수 훅
export const useApprovedConditionsLoansListCountDate = (options?: UseQueryOptions<number, Error>) => {
    const { data: approvedConditionsLoanListDate, isLoading, error } = useApprovedConditionsLoansListDate();

    return useQuery({
        queryKey: [QUERY_KEYS.loan.approvedConditionsLoansListCount],
        queryFn: () => Promise.resolve(approvedConditionsLoanListDate ? approvedConditionsLoanListDate.length : 0),
        enabled: !!approvedConditionsLoanListDate && !isLoading && !error, // 데이터가 있을 때만 실행
        ...options,
    });
};
