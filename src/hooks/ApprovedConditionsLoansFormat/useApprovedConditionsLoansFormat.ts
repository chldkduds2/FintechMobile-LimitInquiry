import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';

const useApprovedConditionsLoansFormat = () => {
    // [ 한도 포멧 함수 ]
    const loanLimitformatAmount = (amount: number) => {
        if (amount >= 10000) {
            const amountInOkuwon = amount / 10000;
            return new Intl.NumberFormat('ko-KR').format(amountInOkuwon) + '억원';
        }
        return new Intl.NumberFormat('ko-KR').format(amount) + '만원';
    };

    // [ 금리 포멧 함수 ]
    const loanRateformatAmount = (amount: number) => {
        return amount + '%';
    };

    const approvedConditionsLoanLimitDateFormatted = (loan: LoansApply) => {
        return loan.condition?.loanLimit ? loanLimitformatAmount(loan.condition.loanLimit / 10000) : '정보 없음';
    };

    const approvedConditionsLoanRateDateFormatted = (loan: LoansApply) => {
        return loan.condition?.loanRate ? loanRateformatAmount(loan.condition.loanRate) : '정보 없음';
    };

    return {
        approvedConditionsLoanLimitDateFormatted,
        approvedConditionsLoanRateDateFormatted,
    };
};

export default useApprovedConditionsLoansFormat;
