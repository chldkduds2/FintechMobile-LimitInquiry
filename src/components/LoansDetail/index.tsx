import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApprovedConditionsLoansListDate from '@/services/ApprovedConditionsLoansDateRepository/queries';
import FintechMobalieContentLayout from '@/components/Common/FintechMobalieLayout/FintechMobalieContentLayout/index';
import LoanTitle from './LoanTitle/index';
import LoanContent from './LoanContant/index';
import LoanCalculator from './LoanCalculator';

const LoansDetail = () => {
    const { loanId } = useParams<{ loanId: string }>();
    const { data: approvedConditionsLoanListDate = [] } = useApprovedConditionsLoansListDate('condition_approved');
    const [loanDetails, setLoanDetails] = useState<any>(null);

    useEffect(() => {
        if (loanId) {
            const loan = approvedConditionsLoanListDate.find((loanApply) => loanApply.id.toString() === loanId);
            setLoanDetails(loan);
        }
    }, [loanId]);

    if (!loanDetails) {
        return <div>Loading...</div>;
    }

    const hasRedemptionFeeTag = loanDetails.product.tags.some((tag: any) => tag.text === '중도상환수수료');

    return (
        <div className="w-[100vw]">
            <FintechMobalieContentLayout>
                <LoanTitle loanDetails={loanDetails} />
            </FintechMobalieContentLayout>
            <div className="h-[8px] w-full bg-gray-99"></div>
            <FintechMobalieContentLayout>
                <LoanContent hasRedemptionFeeTag={hasRedemptionFeeTag} />
            </FintechMobalieContentLayout>
            <div className="h-[8px] w-full bg-gray-99"></div>

            <LoanCalculator />
            <div className="h-[8px] w-full bg-gray-99"></div>
        </div>
    );
};

export default LoansDetail;
