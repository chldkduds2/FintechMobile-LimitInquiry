import React from 'react';
import { useLoanRateLimitList } from '@/hooks/Common/LoanRateLimitList/useLoanRateLimitList';

const LoanRateLimitList = () => {
    const {
        isLoading,
        maxLoan,
        minRateLoan,
        minLoanLimitFormatted,
        minLoanRateFormatted,
        maxLoanLimitFormatted,
        maxLoanRateFormatted,
    } = useLoanRateLimitList();

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="flex mb-5">
            <div className="pt-4 pb-4 pl-4 w-full cursor-pointer rounded-[8px] border border-gray-99 shadow-[0px_0px_12px_rgba(155,163,228,0.2)] hover:active:bg-uniqueGray-99 mr-3">
                <h2 className="mb-1 text-xs font-medium text-gray-40">최저 금리</h2>
                {minRateLoan && minRateLoan.condition ? (
                    <div>
                        <img
                            className="mt-[-20px] mr- h-2[28px] w-[28px] rounded-full float-right mr-3"
                            src={minRateLoan.product.bank.bankLogoUrl}
                            alt={`${minRateLoan.product.bank.name} icon error...`}
                        />

                        <p className="text-lg font-bold leading-[19.8px] text-gray-50">{minLoanRateFormatted}</p>
                        <p className="mt-1.5 text-lg font-bold leading-[19.8px] text-black">{minLoanLimitFormatted}</p>
                    </div>
                ) : (
                    <p className="text-lg font-bold leading-[19.8px] text-gray-50">상품이 없습니다.</p>
                )}
            </div>
            <div className="pt-4 pb-4 pl-4 w-full cursor-pointer rounded-[8px] border border-gray-99 shadow-[0px_0px_12px_rgba(155,163,228,0.2)] hover:active:bg-uniqueGray-99">
                <h2 className="mb-1 text-xs font-medium text-gray-40">최대한도</h2>
                {maxLoan && maxLoan.condition ? (
                    <div>
                        <img
                            className="mt-[-20px] mr- h-2[28px] w-[28px] rounded-full float-right mr-3"
                            src={maxLoan.product.bank.bankLogoUrl}
                            alt={`${maxLoan.product.bank.name} icon error...`}
                        />
                        <p className="text-lg font-bold leading-[19.8px] text-gray-50">{maxLoanRateFormatted}</p>
                        <p className="mt-1.5 text-lg font-bold leading-[19.8px] text-black">{maxLoanLimitFormatted}</p>
                    </div>
                ) : (
                    <p className="text-lg font-bold leading-[19.8px] text-gray-50">상품이 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default LoanRateLimitList;
