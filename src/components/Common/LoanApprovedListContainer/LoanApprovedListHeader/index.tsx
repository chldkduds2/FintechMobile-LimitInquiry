import React from 'react';
import { useApprovedConditionsLoansListCountDate } from '@/services/ApprovedConditionsLoansDate/queries';
import { TbArrowsSort } from 'react-icons/tb';

const LoanApprovedListHeader = () => {
    const { data: approvedConditionsLoansListCountDate } = useApprovedConditionsLoansListCountDate();
    return (
        <div className="flex mb-[30px] mt-7">
            <div className="flex text-sm font-bold">
                대출가능
                <span className="ml-1 text-indigo-50">{approvedConditionsLoansListCountDate}건</span>
            </div>
            <button className="flex ml-auto mr-[5px] cursor-pointer text-xs text-uniqueGray-40">
                <TbArrowsSort size={15} className="mr-1" />
                금리 낮은순
            </button>
        </div>
    );
};
export default LoanApprovedListHeader;
