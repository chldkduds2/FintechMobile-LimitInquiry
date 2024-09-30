import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import { LimitInquiryResponse_ExampleDummyData } from '@/assets/Data/ApprovedConditionsLoansDate/index';

const ApprovedConditionsLoansDateApi = {
    getApprovedConditionsLoanListDateAPI: async (isRateSorted: boolean): Promise<LoansApply[]> => {
        let LimitInquiryResponse_ExampleApprovedConditionsData =
            LimitInquiryResponse_ExampleDummyData.loanApplies.filter((item) => item.status === 'condition_approved');

        // [리스트 정렬 : 금리 낮은 순]
        if (isRateSorted) {
            // 맞을 때 -> 금리 낮은 순으로 데이터 정렬
            LimitInquiryResponse_ExampleApprovedConditionsData =
                LimitInquiryResponse_ExampleApprovedConditionsData.sort(
                    (a, b) => (a.condition?.loanRate ?? 0) - (b.condition?.loanRate ?? 0)
                );
        } else {
            // 아닐 때 -> 한도 높은 순으로 데이터 정렬
            LimitInquiryResponse_ExampleApprovedConditionsData =
                LimitInquiryResponse_ExampleApprovedConditionsData.sort(
                    (a, b) => (b.condition?.loanLimit ?? 0) - (a.condition?.loanLimit ?? 0)
                );
        }

        return LimitInquiryResponse_ExampleApprovedConditionsData as LoansApply[];
    },
};

export default ApprovedConditionsLoansDateApi;
