import React from 'react';
import { LoansApply } from '@/types/LoansListDateType/loansListDate.type';
import useLoansFilteringAndSortingList from '@/hooks/LoansFilteringAndSortingList/useLoansListFiltering';
import { LoansListTagsColor } from '@/utils/LoansListTagsColor';
import useLoansFormat from '@/hooks/LoansFormat/useLoansFormat';
import useLoansList from '@/hooks/Common/LoansListContainer/LoansList/useLoansList';
import { TbExclamationCircle } from 'react-icons/tb';
import { HiOutlineRefresh } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';

const LoansList = ({}) => {
    const { LoansFilteringAndSortingList = [] }: { LoansFilteringAndSortingList: LoansApply[] } =
        useLoansFilteringAndSortingList() || {};
    const { loanLimitDateFormatted, loanRateDateFormatted } = useLoansFormat();
    const { handleLoanClick, handleRefreshClick } = useLoansList();

    return (
        <div className="mb-10 border-t border-[#c1c2ca]/30">
            {LoansFilteringAndSortingList.length > 0 ? (
                <div>
                    {LoansFilteringAndSortingList.map((loan: LoansApply, index: number) => (
                        <div
                            className="hover:active:bg-uniqueGray-99 flex-col w-full items-center  border-b border-[#c1c2ca]/30 pt-[18px] pb-[18px] cursor-pointer"
                            key={index}
                            onClick={() => handleLoanClick(String(loan.id))}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img
                                        className="h-[40px] w-[40px] align-top"
                                        src={loan.product.bank.bankLogoUrl}
                                        alt={loan.product.bank.name}
                                    />
                                    <div className="w-full ml-5">
                                        <span className="text-[16px] font-[500]">{loan.product.bank.name}</span>
                                        <span className="flex gap-[6px] text-[13px] text-gray-40">
                                            {loan.product.name}
                                        </span>
                                    </div>
                                </div>
                                <IoIosArrowForward className="ml-auto" color="#B3B3B3" />
                            </div>

                            <div className="mt-4 w-full items-center pb-[8px] relative flex">
                                <span className="ml-15 text-[20px] font-[500] text-black">
                                    {loanRateDateFormatted(loan)}
                                </span>
                                <span className="ml-15 text-[20px] font-[500] text-black">
                                    {loanLimitDateFormatted(loan)}
                                </span>
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
                <div className="flex justify-center text-center items-center flex-col w-full h-full border-t border-[#c1c2ca]/30 p-10">
                    <div className="m-auto mt-4">
                        <TbExclamationCircle size={60} color="gray" />
                    </div>
                    <p className="m-auto mt-4 text-center text-gray-50">
                        조건에 맞는 대출 상품이 없어요.
                        <br />
                        다른 조건의 상품을 확인해보세요.
                    </p>
                    <button
                        onClick={handleRefreshClick}
                        className="hover:active:bg-uniqueGray-99 mt-10 text-sm flex items-center justify-center cursor-pointer transition-colors duration-100 ease-linear outline-none disabled:cursor-not-allowed bg-white border-indigo-50 border-[1px] border-solid text-indigo-50 font-bold  w-full text-[15px] lg:text-[17px] h-[46px] lg:h-[52px] rounded-[100px]"
                    >
                        <HiOutlineRefresh size={20} className="mr-1" />
                        전체 상품 보기
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoansList;
