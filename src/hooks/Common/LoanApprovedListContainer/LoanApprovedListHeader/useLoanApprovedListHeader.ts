import { useQueryClient } from 'react-query';

const useLoanApprovedListHeader = () => {
    const queryClient = useQueryClient();

    const toggleRateSort = () => {
        queryClient.setQueryData<boolean>('rateSort', (prev) => !prev);
    };

    return { toggleRateSort };
};
export default useLoanApprovedListHeader;
