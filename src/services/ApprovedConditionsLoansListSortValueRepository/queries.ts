import { useQuery, UseQueryOptions } from 'react-query';
import { QUERY_KEYS } from '@/services/queryKey';

// [ 정렬 상태 쿼리 ]
export const useLoanApprovedListHeader = (options?: UseQueryOptions<boolean, Error>) => {
    return useQuery({ queryKey: [QUERY_KEYS.sortValue], queryFn: () => true, ...options });
};
