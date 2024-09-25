import React from 'react';
import { LoanFilterType } from '@/types/LoanSortFilterType/loanSortFilter';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useLoanFilterBar } from '@/hooks/LoanFilterBar/useLoanFilterBar';

const filters: LoanFilterType[] = ['오늘입금', '계좌개설 없음', '중도상환수수료 없음', '1금융', '대출종류'];

const LoanFilterBar = () => {
    const { isExpanded, activeFilters, toggleExpand, handleFilterClick } = useLoanFilterBar(filters);

    return (
        <div className="mt-5 overflow-hidden">
            <div className="relative flex flex-col">
                <ul
                    className={`inline-flex flex-wrap gap-x-1 gap-y-2 last:mr-7 transition-max-height duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-[29px]'}`}
                >
                    {filters.map((filter, index) => (
                        <li
                            key={index}
                            onClick={() => handleFilterClick(index)}
                            className={` h-[29px] flex cursor-pointer rounded-[26px] px-3 text-center border border-solid border-gray-90 active:border active:border-gray-80 ${
                                activeFilters.includes(index) ? 'bg-indigo-50 text-white' : 'bg-white text-black'
                            }`}
                        >
                            <span className="text-xs font-normal leading-[28px]">{filter}</span>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={toggleExpand}
                    className={` h-[29px] w-[29px] flex items-center justify-center rounded-full text-black border border-solid border-gray-90 bg-white active:border active:border-gray-80 ${isExpanded ? 'absolute right-0 mt-9' : 'absolute right-0 top-0'}`}
                >
                    {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                </button>
            </div>
        </div>
    );
};

export default LoanFilterBar;
