import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import { LimitInquiryResponse_ExampleDummyData } from '@/assets/Data/ApprovedConditionsLoansDate/index';

const ApprovedConditionsLoansDateApi = {
    getApprovedConditionsLoanListDateAPI: async (): Promise<LoansApply[]> => {
        let LimitInquiryResponse_ExampleApprovedConditionsData =
            LimitInquiryResponse_ExampleDummyData.loanApplies.filter((item) => item.status === 'condition_approved');

        return LimitInquiryResponse_ExampleApprovedConditionsData as LoansApply[];
    },
};

export default ApprovedConditionsLoansDateApi;
