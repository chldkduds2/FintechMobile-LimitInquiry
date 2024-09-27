import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiOutlineRefresh } from 'react-icons/hi';
import { useLoanFilterBar } from '@/hooks/Common/LoanFilterBar/useLoanFilterBar';

const LoanFilterBar = () => {
    const { isExpanded, filters, activeFilters, showRefresh, toggleExpand, handleRefreshClick, handleFilterClick } =
        useLoanFilterBar();

    return (
        <div className="relative mt-5 overflow-hidden">
            <div className="relative flex flex-col">
                <ul
                    className={`inline-flex flex-wrap gap-x-1 gap-y-2 transition-all duration-500 ease-in-out ${
                        isExpanded ? 'h-auto opacity-100' : 'h-[29px] opacity-100'
                    }`}
                >
                    {showRefresh && (
                        <button
                            onClick={handleRefreshClick}
                            className="h-[29px] w-[29px] flex cursor-pointer rounded-full text-center border border-solid border-gray-90 active:border active:border-gray-80 bg-white text-black"
                        >
                            <HiOutlineRefresh size={17} className="m-auto" />
                        </button>
                    )}
                    {filters.map((filter, index) => (
                        <li
                            key={index}
                            onClick={() => handleFilterClick(filter)}
                            className={`h-[29px] flex cursor-pointer rounded-[26px] px-3 text-center border  active:border active:border-gray-80 ${
                                activeFilters.includes(filter)
                                    ? 'bg-indigo-50 text-white'
                                    : 'bg-white text-black border-solid border-gray-90'
                            }`}
                        >
                            <span className="text-xs font-normal leading-[28px]">{filter}</span>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => toggleExpand()}
                    className={`h-[29px] w-[29px] flex items-center justify-center rounded-full text-black border border-solid border-gray-90 bg-white active:border active:border-gray-80 absolute right-0 ${isExpanded ? 'mt-9' : 'top-0'}`}
                >
                    {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                </button>
            </div>
        </div>
    );
};

export default LoanFilterBar;
