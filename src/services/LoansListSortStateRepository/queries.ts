import { useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import {
    LoansListSortStateType,
    initialIsRateSortState,
} from '@/types/Common/LoansListSortStateType/loansListSortState.type';

const useLoansListSortState = (options?: UseQueryOptions<LoansListSortStateType, Error>) => {
    const queryClient = useQueryClient();

    const { data: isRateSortState = initialIsRateSortState } = useQuery<LoansListSortStateType>({
        queryKey: [QUERY_KEYS.sortValue.isRateSortState],
        queryFn: () => {
            const state = queryClient.getQueryData<LoansListSortStateType>([QUERY_KEYS.sortValue.isRateSortState]);
            return state !== undefined ? state : initialIsRateSortState;
        },
    });

    const setIsRateSortedState = (newSortState: boolean) => {
        queryClient.setQueryData<LoansListSortStateType>([QUERY_KEYS.sortValue.isRateSortState], {
            isRateSortState: newSortState,
        });
    };

    return { isRateSortState: isRateSortState.isRateSortState, setIsRateSortedState };
};

export default useLoansListSortState;
