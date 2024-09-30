import useApprovedConditionsLoansListDate from '@/services/ApprovedConditionsLoansDateRepository/queries';
import useApprovedConditionsLoansFormat from '@/hooks/ApprovedConditionsLoansFormat/useApprovedConditionsLoansFormat';
import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';

export const useLoanRateLimitList = () => {
    const { data: approvedConditionsLoanListDate = [], isLoading } =
        useApprovedConditionsLoansListDate() as unknown as {
            data: LoansApply[];
            isLoading: boolean;
        };
    const { approvedConditionsLoanLimitDateFormatted, approvedConditionsLoanRateDateFormatted } =
        useApprovedConditionsLoansFormat();

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
    const maxLoanLimitFormatted = approvedConditionsLoanLimitDateFormatted(maxLoan);
    // [ 최대한도 대출 금리 포멧 데이터 ]
    const maxLoanRateFormatted = approvedConditionsLoanRateDateFormatted(maxLoan);

    // [ 최저금리 대출 한도 포멧 데이터 ]
    const minLoanLimitFormatted = approvedConditionsLoanLimitDateFormatted(minRateLoan);
    // [ 최저금리 대출 금리 포멧 데이터 ]
    const minLoanRateFormatted = approvedConditionsLoanRateDateFormatted(minRateLoan);

    return {
        approvedConditionsLoanListDate,
        isLoading,
        maxLoan,
        minRateLoan,
        maxLoanLimitFormatted,
        maxLoanRateFormatted,
        minLoanLimitFormatted,
        minLoanRateFormatted,
    };
};
