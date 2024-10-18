// hooks/useLoansListHeader.ts
import { UseQueryOptions, useQueryClient } from '@tanstack/react-query';
import { selectLoansListSortState } from '@/store/Selectors';
import { setIsRateSortState } from '@/store/Slice/LoansListSortStateSlice/reducer';
import { useSelector, useDispatch } from 'react-redux';

const useLoansListHeader = (options?: UseQueryOptions<boolean, Error>) => {
    const isRateSortState = useSelector(selectLoansListSortState);
    const dispatch = useDispatch();

    const toggleSort = () => {
        dispatch(setIsRateSortState(!isRateSortState));
        console.log(isRateSortState);
    };

    return { isRateSortState, toggleSort };
};

export default useLoansListHeader;
