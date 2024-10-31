import { LoansApply } from '@/types/LoansListDateType/loansListDate.type';
import { LimitInquiryResponse_ExampleDummyData } from '@/assets/Data/ApprovedConditionsLoansDate/index';

const LoansListDateApi = {
    getLoanListDateAPI: async (): Promise<LoansApply[]> => {
        return LimitInquiryResponse_ExampleDummyData.loanApplies as LoansApply[];
    },
};

export default LoansListDateApi;
