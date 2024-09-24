import React from 'react'
import { useLoanRateLimitList } from '@/hooks/LoanRateLimitList/useLoanRateLimitList'

const LoanList: React.FC = () => {
    const { data: loans = [], isLoading } = useLoanRateLimitList()

    const formatAmount = (amount: number) => {
        return new Intl.NumberFormat('ko-KR').format(amount)
    }

    const maxLoan = (loans as any[]).reduce((max, loan) => {
        if (!loan.condition || !loan.condition.loanLimit) return max
        return (max.condition?.loanLimit || 0) < loan.condition.loanLimit ? loan : max
    }, {} as any)

    const minRateLoan = (loans as any[]).reduce((min, loan) => {
        if (!loan.condition || !loan.condition.loanRate) return min
        return (min.condition?.loanRate || Infinity) > loan.condition.loanRate ? loan : min
    }, {} as any)

    if (isLoading) return <div>Loading...</div>

    // 만원 단위로 계산
    const maxLoanLimitInManwon = maxLoan.condition?.loanLimit ? maxLoan.condition.loanLimit / 10000 : 0
    const maxLoanLimitFormatted = maxLoanLimitInManwon ? formatAmount(maxLoanLimitInManwon) + ' 만원' : '정보 없음'

    const minLoanLimitInManwon = minRateLoan.condition?.loanLimit ? minRateLoan.condition.loanLimit / 10000 : 0
    const minLoanLimitFormatted = minLoanLimitInManwon ? formatAmount(minLoanLimitInManwon) + ' 만원' : '정보 없음'

    const minLoanRateFormatted = minRateLoan.condition?.loanRate
        ? formatAmount(minRateLoan.condition.loanRate) + ' %'
        : '정보 없음'

    return (
        <div className="flex mb-5">
            <div className="pt-4 pb-4 pl-4 w-full cursor-pointer rounded-[8px] border border-gray-99 shadow-[0px_0px_12px_rgba(155,163,228,0.2)] hover:active:bg-uniqueGray-99 mr-3">
                <h2 className="mb-1 text-xs font-medium text-gray-40">최저 금리</h2>
                {minRateLoan && minRateLoan.condition ? (
                    <div>
                        <img
                            className="mt-[-20px] mr- h-2[28px] w-[28px] rounded-full float-right mr-3"
                            src={minRateLoan.product.bank.bankLogoUrl}
                            alt={`${minRateLoan.product.bank.name}icon error...`}
                        />
                        <p className="mb-1 text-lg font-bold leading-[19.8px] text-black">{minLoanRateFormatted}</p>
                        <p className="text-lg font-bold leading-[19.8px] text-gray-50">{minLoanLimitFormatted}</p>
                    </div>
                ) : (
                    <p>상품이 없습니다.</p>
                )}
            </div>
            <div className="pt-4 pb-4 pl-4 w-full cursor-pointer rounded-[8px] border border-gray-99 shadow-[0px_0px_12px_rgba(155,163,228,0.2)] hover:active:bg-uniqueGray-99">
                <h2 className="mb-1 text-xs font-medium text-gray-40">최대한도</h2>
                {maxLoan && maxLoan.condition ? (
                    <div>
                        <img
                            className="mt-[-20px] mr- h-2[28px] w-[28px] rounded-full float-right mr-3"
                            src={maxLoan.product.bank.bankLogoUrl}
                            alt={`${maxLoan.product.bank.className}icon error...`}
                        />
                        <p className="mb-1 text-lg font-bold leading-[19.8px] text-gray-50">
                            {maxLoan.condition.loanRate} %
                        </p>
                        <p className="text-lg font-bold leading-[19.8px] text-black">{maxLoanLimitFormatted}</p>
                    </div>
                ) : (
                    <p>상품이 없습니다.</p>
                )}
            </div>
        </div>
    )
}

export default LoanList
