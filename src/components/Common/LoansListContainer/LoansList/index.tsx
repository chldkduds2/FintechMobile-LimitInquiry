import React from 'react';
import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import { LoansListTagsColor } from '@/utils/LoansListTagsColor';
import useLoansFormat from '@/hooks/LoansFormat/useLoansFormat';
import useLoansFilteringAndSortingList from '@/hooks/LoansFilteringAndSortingList/useLoansListFiltering';

const LoansList = () => {
    const { approvedConditionsLoansFilteringList = [] } = useLoansFilteringAndSortingList();

    const { loanLimitDateFormatted, loanRateDateFormatted } = useLoansFormat();

    return (
        <React.Fragment>
            {approvedConditionsLoansFilteringList.length > 0 ? (
                <div>
                    {approvedConditionsLoansFilteringList.map((loan: LoansApply, index: number) => (
                        <div
                            className=" hover:active:bg-uniqueGray-99 flex-col w-full items-center border-t border-[#c1c2ca]/30 pt-[18px] pb-[18px]"
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

                            <div className="mt-4 w-full items-center pb-[8px] relative flex">
                                <div className="ml-15 text-[20px] font-[500] text-black">
                                    {loanRateDateFormatted(loan)}
                                </div>
                                <p className="ml-15  text-[20px] font-[500] text-black">
                                    {loanLimitDateFormatted(loan)}
                                </p>
                            </div>
                            <div className="flex items-center ml-15">
                                {loan.product.tags.map((tag, tagIndex) => {
                                    const { bg, text } = LoansListTagsColor[tag.text] || {
                                        bg: 'bg-gray-95',
                                        text: 'text-gray-40',
                                    };
                                    return tag.text === '오늘입금' ? (
                                        tag.type === 'AVAILABLE_TODAY_DEPOSIT' && (
                                            <span
                                                key={tagIndex}
                                                className={`mr-2 flex h-5 items-center whitespace-nowrap rounded-md ${bg} px-[6px] pt-[1px] text-11-medium leading-[15.95px] ${text}`}
                                            >
                                                {tag.text}
                                            </span>
                                        )
                                    ) : (
                                        <span
                                            key={tagIndex}
                                            className={`mr-2 flex h-5 items-center whitespace-nowrap rounded-md ${bg} px-[6px] pt-[1px] text-11-medium leading-[15.95px] ${text}`}
                                        >
                                            {tag.text}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-lg font-bold leading-[19.8px] text-gray-50">데이터가 없습니다.</p>
            )}
        </React.Fragment>
    );
};

export default LoansList;
