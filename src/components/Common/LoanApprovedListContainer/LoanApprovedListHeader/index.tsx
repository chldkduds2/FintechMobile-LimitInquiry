import { TbArrowsSort } from 'react-icons/tb';
import useLoanApprovedListHeader from '@/hooks/Common/LoanApprovedListContainer/LoanApprovedListHeader/useLoanApprovedListHeader';
import useApprovedConditionsLoansListCountState from '@/services/ApprovedConditionsLoansListCountStateRepository/queries';

const LoanApprovedListHeader = () => {
    const { data: approvedConditionsLoansListCountDate } = useApprovedConditionsLoansListCountState();
    const { toggleSort, isRateSortState } = useLoanApprovedListHeader();

    return (
        <div className="flex mb-[30px] mt-7">
            <div className="flex text-sm font-bold">
                대출가능
                <span className="ml-1 text-indigo-50">{approvedConditionsLoansListCountDate}건</span>
            </div>
            <button className="flex ml-auto mr-[5px] cursor-pointer text-xs text-uniqueGray-40" onClick={toggleSort}>
                <TbArrowsSort size={15} className="mr-1" />
                {isRateSortState ? '금리 낮은순' : '한도 높은순'}
            </button>
        </div>
    );
};

export default LoanApprovedListHeader;
