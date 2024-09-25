import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import { LimitInquiryResponse_ExampleDummyData } from '@/assets/Data/ApprovedConditionsLoansDate/index';

class ApprovedConditionsLoansDateApi {
    public async getApprovedConditionsLoanListDateAPI(): Promise<LoansApply[]> {
        const LimitInquiryResponse_ExampleApprovedConditionsData =
            LimitInquiryResponse_ExampleDummyData.loanApplies.filter((item) => item.status === 'condition_approved');

        return LimitInquiryResponse_ExampleApprovedConditionsData as LoansApply[];
    }
}
export default new ApprovedConditionsLoansDateApi();
