import { LoansApply } from '@/types/ApprovedConditionsLoansDateType/approvedConditionsLoansDate.type';
import { LimitInquiryResponse_ExampleDummyData } from '@/assets/Data/ApprovedConditionsLoansDate/index';

const ApprovedConditionsLoansDateApi = {
    getApprovedConditionsLoanListDateAPI: async (status: string): Promise<LoansApply[]> => {
        // status : [ 대출 거절 -> condition_rejecte || 오류 -> condition_failed || 대출 승인 -> condition_approved ]
        let LimitInquiryResponse_ExampleApprovedConditionsData =
            LimitInquiryResponse_ExampleDummyData.loanApplies.filter((item) => item.status === status);

        return LimitInquiryResponse_ExampleApprovedConditionsData as LoansApply[];
    },
};

export default ApprovedConditionsLoansDateApi;
