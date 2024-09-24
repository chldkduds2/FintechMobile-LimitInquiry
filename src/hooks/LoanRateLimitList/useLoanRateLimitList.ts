import { useQuery } from '@tanstack/react-query'
import { LoanApply } from '@/types/LimitInquiryResponse_ExampleDummyDataType/index.type'
import { LimitInquiryResponse_ExampleDummyData } from '@/assets/data/LimitInquiryResponse_ExampleDummyData/index'

const LimitInquiryResponse_Example_ConditionRejectedData = LimitInquiryResponse_ExampleDummyData.loanApplies.filter(
    (item) => item.status === 'condition_approved',
)

const fetchLoans = async (): Promise<LoanApply[]> => {
    return LimitInquiryResponse_Example_ConditionRejectedData
}

export const useLoanRateLimitList = () => {
    return useQuery<LoanApply[], Error>({
        queryKey: ['loans'],
        queryFn: fetchLoans,
    })
}

export const useConditionRejectedCount = () => {
    return useQuery<number, Error>({
        queryKey: ['conditionRejectedCount'],
        queryFn: () => Promise.resolve(LimitInquiryResponse_Example_ConditionRejectedData.length),
    })
}
