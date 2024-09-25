import React from 'react';
import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import { useApprovedConditionsLoansListDate } from '@/services/ApprovedConditionsLoansDate/queries';

const LoanApprovedList = () => {
    const { data: approvedConditionsLoanListDate = [], isLoading } = useApprovedConditionsLoansListDate();

    console.log(approvedConditionsLoanListDate);

    return (
        <React.Fragment>
            {approvedConditionsLoanListDate.length > 0 ? (
                <div>
                    {approvedConditionsLoanListDate.map((loan: any, index) => (
                        <div
                            className="flex-col w-full items-center border-t border-[#c1c2ca]/30 pt-[18px] pb-[18px]"
                            key={index}
                        >
                            <div className="flex">
                                <img
                                    className="h-[40px] w-[40px] align-top"
                                    src={loan.product.bank.bankLogoUrl}
                                    alt={loan.product.bank.name}
                                />
                                <div className="w-full ml-5">
                                    <div className="text-[16px] font-[500]">{loan.product.bank.name}</div>
                                    <div className="flex gap-[6px] text-[13px] text-gray-40">{loan.product.name}</div>
                                </div>
                            </div>
                            <div className="ml-14 mt-4 flex w-full items-center justify-start gap-[22px] px-1 pb-[18px]">
                                <div className="min-w-[116px] text-[20px] font-[500] text-black">
                                    {loan.condition.loanRate}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>데이터가 없습니다.</p>
            )}
        </React.Fragment>
    );
};

export default LoanApprovedList;
