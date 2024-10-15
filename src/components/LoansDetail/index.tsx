import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApprovedConditionsLoansListDate from '@/services/ApprovedConditionsLoansDateRepository/queries';
import FintechMobalieContentLayout from '@/components/Common/FintechMobalieLayout/FintechMobalieContentLayout/index';
import LoanTitle from './LoanTitle/index';
import LoanContent from './LoanContant/index';
import LoanCalculator from './LoanCalculator/index';
import LoanInfo from './LoanInfo/index';
import useLoansRateLimitList from '@/hooks/Common/LoansRateLimitList/LoansRateLimitList';
import useLoansList from '@/hooks/Common/LoansListContainer/LoansList/useLoansList';

const LoansDetail = () => {
    const { loanId } = useParams<{ loanId: string }>();
    const { data: approvedConditionsLoanListDate = [] } = useApprovedConditionsLoansListDate('condition_approved');
    const [loanDetails, setLoanDetails] = useState<any>(null);
    const { isPending: isLoansRateLimitListPending } = useLoansRateLimitList();
    const { isPending: isoansListPending } = useLoansList();

    useEffect(() => {
        if (loanId) {
            const loan = approvedConditionsLoanListDate.find((loanApply) => loanApply.id.toString() === loanId);
            setLoanDetails(loan);
        }
    }, [loanId, approvedConditionsLoanListDate]);

    if (isLoansRateLimitListPending || !loanDetails || isoansListPending) {
        return <div>Loading...</div>;
    }

    const hasRedemptionFeeTag = loanDetails.product.tags.some((tag: any) => tag.text === '중도상환수수료');

    return (
        <div className="w-[100vw] max-w-[427px]">
            <FintechMobalieContentLayout>
                <LoanTitle loanDetails={loanDetails} />
            </FintechMobalieContentLayout>

            <div className="h-[8px] w-full bg-gray-99"></div>
            <FintechMobalieContentLayout>
                <LoanContent hasRedemptionFeeTag={hasRedemptionFeeTag} />
            </FintechMobalieContentLayout>
            <div className="h-[8px] w-full bg-gray-99"></div>

            <LoanCalculator loanLimit={loanDetails.condition.loanLimit} loanRate={loanDetails.condition.loanRate} />
            <div className="h-[8px] w-full bg-gray-99"></div>

            <LoanInfo />
        </div>
    );
};

export default LoansDetail;
