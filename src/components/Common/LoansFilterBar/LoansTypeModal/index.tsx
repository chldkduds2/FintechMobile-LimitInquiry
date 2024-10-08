import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { HiOutlineRefresh } from 'react-icons/hi';
import { useLoansTypeFilterModal } from '@/hooks/Common/LoansFilterBar/LoansTypeFilterModal/useLoansTypeFilterModal';

interface LoansTypeModalProps {
    onClose: () => void;
}

const LoansTypeModal = ({ onClose }: LoansTypeModalProps) => {
    const {
        modalPortal,
        typeFilters,
        filteringDataListCounts,
        filteringDataListTotalCount,
        loansTypeFilterModalState,
        handleCheckboxClick,
        handleRefreshClick,
        handleResultBtnClick,
    } = useLoansTypeFilterModal();

    return ReactDOM.createPortal(
        <div className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-full">
            <div className="relative w-full h-[25rem] p-10 bg-white rounded-lg shadow-lg">
                <IoClose className="absolute cursor-pointer top-4 right-4" color="gray" size={24} onClick={onClose} />
                <div className="mb-10 text-xl font-bold">대출 종류</div>
                <div className="flex flex-col gap-4 text-sm leading-[21px] font-bold text-gray-40">
                    {typeFilters.map((loansTypeFilter, index) => (
                        <label key={index} className="flex items-center mb-3">
                            <input
                                type="checkbox"
                                checked={loansTypeFilterModalState.some((filter) => filter === loansTypeFilter)}
                                onChange={() => handleCheckboxClick(loansTypeFilter)}
                                className="relative w-4 h-4 mr-2 bg-transparent border border-gray-300 rounded-full outline-none checked:bg-blue-600 accent-indigo-50"
                                disabled={filteringDataListCounts[index].count === 0}
                            />
                            <span
                                className={` ${filteringDataListCounts[index].count != 0 ? 'text-gray-30' : 'text-[#9FA0AD]'}`}
                            >
                                {loansTypeFilter}
                            </span>
                            {loansTypeFilter === filteringDataListCounts[index].name && (
                                <div
                                    className={`ml-2 text-sm font-medium leading-[21px] ${filteringDataListCounts[index].count != 0 ? 'text-indigo-60' : 'text-[#9FA0AD]'}`}
                                >
                                    {filteringDataListCounts[index].count}
                                </div>
                            )}
                        </label>
                    ))}
                </div>
                <div className="fixed bottom-0 left-0 z-50 flex w-full gap-2 p-4 bg-white">
                    <button
                        onClick={handleRefreshClick}
                        className="text-base grow max-w-[132px] font-bold flex items-center justify-center cursor-pointer transition-colors duration-100 ease-linear outline-none disabled:cursor-not-allowed bg-gray-99 border-gray-90 border-[1px] border-solid text-gray-50 lg:hover:bg-[#a2a2a2] lg:focus:bg-[#a2a2a2] lg:hover:border-[#d8d8d8] lg:focus:border-[#d8d8d8] active:bg-[#a2a2a2] active:border-[#d8d8d8] disabled:bg-gray-99 disabled:border-gray-90 w-full text-[17px] lg:text-[21px] h-[54px] lg:h-[58px] rounded-[100px]"
                    >
                        <HiOutlineRefresh size={20} className="mr-1" />
                        초기화
                    </button>
                    <button
                        onClick={handleResultBtnClick}
                        className="text-base grow text-16-bold leading-[1.2519rem] flex items-center justify-center cursor-pointer transition-colors duration-100 ease-linear outline-none disabled:cursor-not-allowed bg-indigo-50 border-indigo-50 border-[1px] border-solid text-white font-bold lg:hover:bg-[#374593] lg:focus:bg-[#374593] lg:hover:border-[#374593] lg:focus:border-[#374593] active:bg-[#374593] active:border-[#374593] disabled:hover:bg-indigo-50 disabled:focus:bg-indigo-50 disabled:active:bg-indigo-50 w-full text-[17px] lg:text-[21px] h-[54px] lg:h-[58px] rounded-[100px]"
                    >
                        {`${filteringDataListTotalCount}개 결과 보기`}
                    </button>
                </div>
            </div>
        </div>,
        modalPortal
    );
};

export default LoansTypeModal;
