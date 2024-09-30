import { UseQueryOptions, useQueryClient } from '@tanstack/react-query';
import useLoansListSortState from '@/services/LoansListSortStateRepository/queries';

const useLoanApprovedListHeader = (options?: UseQueryOptions<boolean, Error>) => {
    const { isRateSortState: isRateSortState, setIsRateSortedState } = useLoansListSortState();

    const toggleSort = () => {
        const newSortState = !isRateSortState;
        setIsRateSortedState(newSortState);
    };

    return { isRateSortState, toggleSort };
};

export default useLoanApprovedListHeader;
