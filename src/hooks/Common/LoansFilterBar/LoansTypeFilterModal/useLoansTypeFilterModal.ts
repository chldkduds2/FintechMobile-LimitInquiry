import { LoansApply } from '@/types/ApprovedConditionsLoansDateType/approvedConditionsLoansDate.type';
import { LoansTypeFilterType } from '@/types/Common/LoanFilterBarType/LoansTypeFilterModalType/loansTypeFilterModal.type';
import useLoansFilterBarState from '@/services/LoansFilterBarStateRepository/queries';
import useLoansTypeFilterBarState from '@/services/LoansFilterBarStateRepository/LoansTypeFilterModalStateRepository/queries';
import useLoansListDate from '@/services/ApprovedConditionsLoansDateRepository/queries';
import useModalOpenState from '@/services/ModalOpenStateRepository/queries';

export const useLoansTypeFilterModal = () => {
    const modalPortal = document.getElementById('modal-portal')!;
    const typeFilters: LoansTypeFilterType[] = ['신용대출', '주택담보대출', '자동차담보대출', '대환대출'];
    const { data: approvedConditionsLoanListDate = [] } = useLoansListDate('condition_approved');
    const { removeFilter } = useLoansFilterBarState();
    const { loansTypeFilterModalState, addLoansTypeFilter, removeLoansTypeFilter, resetLoansTypeFilter } =
        useLoansTypeFilterBarState();
    const { isLoansTypeModalOpenState, setIsLoansTypeModalOpenState } = useModalOpenState();

    const toggleModal = () => {
        setIsLoansTypeModalOpenState(!isLoansTypeModalOpenState);
        removeFilter('대출종류');
    };

    const handleCheckboxClick = (loansTypeFilter: string) => {
        const existingFilter = loansTypeFilterModalState.find((filter: string) => filter === loansTypeFilter);
        if (existingFilter) {
            removeLoansTypeFilter(loansTypeFilter);
        } else {
            addLoansTypeFilter(loansTypeFilter);
        }
    };

    let filteringDataListTotalCount = 0;
    const filteringDataListCounts = typeFilters.map((filter) => {
        const filteringDataListCount = approvedConditionsLoanListDate.filter((loan: LoansApply) =>
            loan.product.name.includes(filter)
        ).length;

        return { name: filter, count: filteringDataListCount };
    });

    filteringDataListTotalCount = filteringDataListCounts.reduce((total, item) => total + item.count, 0);

    if (loansTypeFilterModalState.length > 0) {
        filteringDataListTotalCount = filteringDataListCounts.reduce((total, item) => {
            if (loansTypeFilterModalState.includes(item.name)) {
                return total + item.count;
            }
            return total;
        }, 0);
    }

    const handleRefreshClick = () => {
        resetLoansTypeFilter();
    };

    const handleResultBtnClick = () => {
        setIsLoansTypeModalOpenState(!isLoansTypeModalOpenState);
    };

    return {
        modalPortal,
        typeFilters,
        filteringDataListCounts,
        filteringDataListTotalCount,
        loansTypeFilterModalState,
        isLoansTypeModalOpenState: isLoansTypeModalOpenState,
        toggleModal,
        handleCheckboxClick,
        handleRefreshClick,
        handleResultBtnClick,
    };
};
