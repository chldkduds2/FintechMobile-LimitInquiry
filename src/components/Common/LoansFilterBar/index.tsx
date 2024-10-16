import React from 'react';
import LoansTypeModal from './LoansTypeModal/index';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiOutlineRefresh } from 'react-icons/hi';
import { useLoansFilterBar } from '@/hooks/Common/LoansFilterBar/useLoansFilterBar';
import { useLoansTypeFilterModal } from '@/hooks/Common/LoansFilterBar/LoansTypeFilterModal/useLoansTypeFilterModal';

const LoansFilterBar = () => {
    const {
        filters,
        isExpanded,
        loansFiterBarState,
        showRefresh,
        toggleExpand,
        handleFilterClick,
        handleRefreshClick,
    } = useLoansFilterBar();

    const { isLoansTypeModalOpenState, toggleModal } = useLoansTypeFilterModal();

    return (
        <div className="relative mt-5 overflow-hidden">
            {isLoansTypeModalOpenState && <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>}

            <div className="relative flex flex-col">
                <div className="w-full">
                    <ul
                        className={`inline-flex flex-wrap gap-x-1 gap-y-2 transition-all duration-500 ease-in-out ${
                            isExpanded ? 'h-auto opacity-100' : 'h-[29px] opacity-100 overflow-hidden'
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
                            <button
                                key={index}
                                onClick={() => {
                                    handleFilterClick(filter);
                                }}
                                className={`h-[29px] flex cursor-pointer rounded-[26px] px-3 text-center border  active:border active:border-gray-80 ${
                                    loansFiterBarState.includes(filter)
                                        ? 'bg-indigo-50 text-white'
                                        : 'bg-white text-black border-solid border-gray-90'
                                }`}
                            >
                                {filter === '대출종류' ? (
                                    <span
                                        onClick={toggleModal}
                                        className="flex text-xs font-normal text-center cursor-pointer"
                                    >
                                        <span className="leading-[28px] mr-1">{filter}</span>
                                        {isLoansTypeModalOpenState ? (
                                            <FaChevronDown
                                                size={10}
                                                className="mt-2"
                                                color={loansFiterBarState.includes(filter) ? 'white' : 'gray'}
                                            />
                                        ) : (
                                            <FaChevronUp
                                                size={10}
                                                className="mt-2"
                                                color={loansFiterBarState.includes(filter) ? 'white' : 'gray'}
                                            />
                                        )}
                                    </span>
                                ) : (
                                    <span className="text-xs font-normal leading-[28px]">{filter}</span>
                                )}
                            </button>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={() => toggleExpand()}
                    className={`h-[29px] w-[29px] flex items-center justify-center rounded-full text-black border border-solid border-gray-90 bg-white active:border active:border-gray-80 absolute right-0 ${isExpanded ? 'mt-9' : 'top-0'}`}
                >
                    {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                </button>
            </div>
            {isLoansTypeModalOpenState && <LoansTypeModal onClose={toggleModal} />}
        </div>
    );
};

export default LoansFilterBar;
