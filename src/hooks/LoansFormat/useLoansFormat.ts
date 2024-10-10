import { LoansApply } from '@/types/ApprovedConditionsLoansDateType/approvedConditionsLoansDate.type';

const useLoansFormat = () => {
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

    const loanLimitDateFormatted = (loan: LoansApply) => {
        return loan.condition?.loanLimit ? loanLimitformatAmount(loan.condition.loanLimit / 10000) : '정보 없음';
    };

    const loanRateDateFormatted = (loan: LoansApply) => {
        return loan.condition?.loanRate ? loanRateformatAmount(loan.condition.loanRate) : '정보 없음';
    };

    return {
        loanLimitDateFormatted,
        loanRateDateFormatted,
    };
};

export default useLoansFormat;
