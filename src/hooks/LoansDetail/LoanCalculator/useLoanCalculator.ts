import { LoanCalculatorStateType } from '@/types/LoansDetailType/LoanCalculatorType/LoanCalculator.type';

const useLoanCalculator = ({ loanAmount, annualInterestRate, loanPeriodMonths }: LoanCalculatorStateType) => {
    // 월 이자율 계산
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    // 원리금 균등상환 방식의 월 상환금액 계산
    const monthlyPayment =
        (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanPeriodMonths)) /
        (Math.pow(1 + monthlyInterestRate, loanPeriodMonths) - 1);

    // 첫 달 원리금 균등 상환 금액을 반올림하여 소수점 처리
    const firstMonthTotalPayment = Math.round(monthlyPayment);

    // 숫자를 천, 만 단위로 포맷팅하는 함수
    const formatCurrency = (amount: number): string => {
        const units = ['원', '만'];
        let result = '';
        let unitIndex = 0;

        while (amount > 0 && unitIndex < units.length) {
            const unitValue = amount % 10000;
            if (unitValue > 0 || unitIndex === 0) {
                result = `${unitValue.toLocaleString()}${units[unitIndex]} ` + result;
            }
            amount = Math.floor(amount / 10000);
            unitIndex++;
        }

        return result.trim();
    };

    // 상환 스케줄 반환
    return { firstMonthTotalPayment: formatCurrency(firstMonthTotalPayment) };
};

export default useLoanCalculator;
