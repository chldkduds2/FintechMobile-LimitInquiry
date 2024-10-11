export interface LoanCalculatorStateType {
    loanAmount: number; // 대출한도 (대출금액)
    annualInterestRate: number; // 연 이자율
    loanPeriodMonths: number; // 상환 기간 (개월)
}

export interface LoanCalculatorPropsType {
    loanLimit: number;
    loanRate: number;
}
