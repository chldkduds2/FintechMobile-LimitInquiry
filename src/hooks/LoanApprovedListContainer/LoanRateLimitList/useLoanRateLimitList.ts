import { useApprovedConditionsLoansListDate } from '@/services/ApprovedConditionsLoansDate/queries';

export const useLoanRateLimitList = () => {
    const { data: approvedConditionsLoanListDate = [], isLoading } = useApprovedConditionsLoansListDate();

    const formatAmount = (amount: number) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    };

    const maxLoan = (approvedConditionsLoanListDate as any[]).reduce((max, loan) => {
        if (!loan.condition || !loan.condition.loanLimit) return max;
        return (max.condition?.loanLimit || 0) < loan.condition.loanLimit ? loan : max;
    }, {} as any);

    const minRateLoan = (approvedConditionsLoanListDate as any[]).reduce((min, loan) => {
        if (!loan.condition || !loan.condition.loanRate) return min;
        return (min.condition?.loanRate || Infinity) > loan.condition.loanRate ? loan : min;
    }, {} as any);

    // 만원 단위로 계산
    const maxLoanLimitInManwon = maxLoan.condition?.loanLimit ? maxLoan.condition.loanLimit / 10000 : 0;
    const maxLoanLimitFormatted = maxLoanLimitInManwon ? formatAmount(maxLoanLimitInManwon) + ' 만원' : '정보 없음';

    const minLoanLimitInManwon = minRateLoan.condition?.loanLimit ? minRateLoan.condition.loanLimit / 10000 : 0;
    const minLoanLimitFormatted = minLoanLimitInManwon ? formatAmount(minLoanLimitInManwon) + ' 만원' : '정보 없음';

    const minLoanRateFormatted = minRateLoan.condition?.loanRate
        ? formatAmount(minRateLoan.condition.loanRate) + ' %'
        : '정보 없음';

    return {
        approvedConditionsLoanListDate,
        isLoading,
        maxLoan,
        minRateLoan,
        maxLoanLimitFormatted,
        minLoanLimitFormatted,
        minLoanRateFormatted,
    };
};
