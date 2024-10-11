import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LimitInquiryResponse_DetailedDummyData } from '@/assets/Data/ApprovedConditionsDetailLoansDate/index';
import LoanInfoAccordionItem from './LonInfoAccordionItem/index';

const LoanInfo = () => {
    const data = LimitInquiryResponse_DetailedDummyData.product.displayProperty.v1.termsAndCondition;
    const [openIndexes, setOpenIndexes] = useState<boolean[]>(Array(data.length).fill(true));

    const toggleAll = () => {
        const newState = openIndexes.some((isOpen) => isOpen) ? false : true;
        setOpenIndexes(Array(data.length).fill(newState));
    };

    const toggleOpen = (index: number) => {
        const newOpenIndexes = [...openIndexes];
        newOpenIndexes[index] = !newOpenIndexes[index];
        setOpenIndexes(newOpenIndexes);
    };

    const isAnyOpen = openIndexes.some((isOpen) => isOpen);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between px-5 h-15">
                <h1 className="text-base font-bold text-black">대출상품 안내</h1>

                <button className="flex items-center justify-center h-11 flex-nowrap" onClick={toggleAll}>
                    <span className="text-xs font-bold text-indigo-40">{isAnyOpen ? '전체닫기' : '전체열기'}</span>
                    <div className="flex items-center justify-center w-4 h-4 text-indigo-40">
                        {isAnyOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </div>
                </button>
            </div>
            <div className="flex justify-center m-auto w-[91%] items-center border-b border-[#c1c2ca]/30"></div>
            <div className="mt-2">
                {data.map((item, index) => {
                    const title = Object.keys(item)[0];
                    const content = (item as { [key: string]: string | undefined })[title] || '';
                    return (
                        <LoanInfoAccordionItem
                            key={index}
                            title={title}
                            content={content}
                            isOpen={openIndexes[index]}
                            toggleOpen={() => toggleOpen(index)}
                        />
                    );
                })}
            </div>
            <div className="fixed bottom-0 left-0 z-50 w-full">
                <div className="px-4 bg-white pb-[max(env(safe-area-inset-bottom),_16px)] relative">
                    <div className="relative flex flex-col gap-2">
                        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent"></div>
                        <button className="text-base grow flex items-center justify-center cursor-pointer transition-colors duration-100 ease-linear outline-none disabled:cursor-not-allowed bg-indigo-50 border-indigo-50 border-[1px] border-solid text-white font-bold lg:hover:bg-[#374593] lg:focus:bg-[#374593] lg:hover:border-[#374593] lg:focus:border-[#374593] active:bg-[#374593] active:border-[#374593] disabled:hover:bg-indigo-50 disabled:focus:bg-indigo-50 disabled:active:bg-indigo-50 w-full text-[17px] lg:text-[21px] h-[54px] lg:h-[58px] rounded-[100px] relative z-10">
                            금융사에서 신청 이어하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanInfo;
