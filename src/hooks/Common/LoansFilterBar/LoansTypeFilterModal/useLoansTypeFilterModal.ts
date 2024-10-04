import { LoansTypeFilterType } from '@/types/Common/LoanFilterBarType/LoansTypeFilterModal.Type/loansTypeFilterModal.type';
import useLoansFilterBarState from '@/services/LoansFilterBarStateRepository/queries';
import useLoansTypeFilterBarState from '@/services/LoansFilterBarStateRepository/LoansTypeFilterModalStateRepository/queries';

export const useLoansTypeFilterModal = () => {
    const modalPortal = document.getElementById('modal-portal')!;
    const typeFilters: LoansTypeFilterType[] = ['신용대출', '주택담보대출', '자동차담보대출', '대환대출'];

    const { removeFilter } = useLoansFilterBarState();
    const {
        loansTypeFilterModalState,
        isLoansTypeModalOpenState,
        addLoansTypeFilter,
        removeLoansTypeFilter,
        resetLoansTypeFilter,
        setIsLoansTypeModalOpenState,
    } = useLoansTypeFilterBarState();

    const toggleModal = () => {
        setIsLoansTypeModalOpenState(!isLoansTypeModalOpenState);
        removeFilter('대출종류');
        resetLoansTypeFilter();
    };

    const handleCheckboxClick = (loansTypeFilter: string) => {
        if (loansTypeFilterModalState.includes(loansTypeFilter)) {
            removeLoansTypeFilter(loansTypeFilter);
        } else {
            addLoansTypeFilter(loansTypeFilter);
        }
    };

    const handleRefreshClick = () => {
        resetLoansTypeFilter();
    };

    return {
        modalPortal,
        typeFilters,
        loansTypeFilterModalState,
        isLoansTypeModalOpenState,
        toggleModal,
        handleCheckboxClick,
        handleRefreshClick,
    };
};
