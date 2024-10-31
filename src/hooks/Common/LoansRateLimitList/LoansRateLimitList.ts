import useLoansListDate from '@/services/LoansListDateRepository/queries';
import useLoansFormat from '@/hooks/LoansFormat/useLoansFormat';
import { LoansApply } from '@/types/LoansListDateType/approvedConditionsLoansDate.type';
import { useNavigate } from 'react-router-dom';
import { useTransition } from 'react';

const useLoansRateLimitList = () => {
    const { data: approvedConditionsLoanListDate = [], isLoading } = useLoansListDate(
        'condition_approved'
    ) as unknown as {
        data: LoansApply[];
        isLoading: boolean;
    };
    const { loanLimitDateFormatted, loanRateDateFormatted } = useLoansFormat();

    // [ 최대한도 대출 리스트 ]
    const maxLoan = approvedConditionsLoanListDate.reduce((max, loan) => {
        if (!loan.condition || !loan.condition.loanLimit) return max;
        return (max.condition?.loanLimit || 0) < loan.condition.loanLimit ? loan : max;
    }, {} as LoansApply);

    // [ 최저금리 대출 리스트 ]
    const minRateLoan = approvedConditionsLoanListDate.reduce((min, loan) => {
        if (!loan.condition || !loan.condition.loanRate) return min;
        return (min.condition?.loanRate || Infinity) > loan.condition.loanRate ? loan : min;
    }, {} as LoansApply);

    // [ 최대한도 대출 한도 포멧 데이터 ]
    const maxLoanLimitFormatted = loanLimitDateFormatted(maxLoan);
    // [ 최대한도 대출 금리 포멧 데이터 ]
    const maxLoanRateFormatted = loanRateDateFormatted(maxLoan);

    // [ 최저금리 대출 한도 포멧 데이터 ]
    const minLoanLimitFormatted = loanLimitDateFormatted(minRateLoan);
    // [ 최저금리 대출 금리 포멧 데이터 ]
    const minLoanRateFormatted = loanRateDateFormatted(minRateLoan);

    const navigate = useNavigate();

    const [isPending, startTransition] = useTransition();

    const handleLoanClick = (loanId: string) => {
        startTransition(() => {
            navigate(`/loansDetail/${loanId}`);
        });
    };

    return {
        isPending,
        approvedConditionsLoanListDate,
        isLoading,
        maxLoan,
        minRateLoan,
        maxLoanLimitFormatted,
        maxLoanRateFormatted,
        minLoanLimitFormatted,
        minLoanRateFormatted,
        handleLoanClick,
    };
};
export default useLoansRateLimitList;
