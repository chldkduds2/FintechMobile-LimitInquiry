import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import { ModalOpenStateType, initialModalOpenState } from '@/types/ModalOpenStateType/modalOpenState.type';

const useModalOpenState = () => {
    const queryClient = useQueryClient();
    const { data: modalOpenState = initialModalOpenState } = useQuery<ModalOpenStateType>({
        queryKey: [QUERY_KEYS.filterValue.modalOpenState],
        queryFn: () => {
            const state = queryClient.getQueryData<ModalOpenStateType>([QUERY_KEYS.filterValue.modalOpenState]);
            return state !== undefined ? state : initialModalOpenState;
        },
        initialData: initialModalOpenState,
    });

    const setIsLoansTypeModalOpenState = (newLoansTypeModalOpenState: boolean) => {
        queryClient.setQueryData<ModalOpenStateType>(
            [QUERY_KEYS.filterValue.modalOpenState],
            (oldState = initialModalOpenState) => ({
                ...oldState,
                isLoansTypeModalOpenState: newLoansTypeModalOpenState,
            })
        );
    };

    const setNotApprovedLoansDataModalOpenState = (newNotApprovedLoansDataModalOpenState: boolean) => {
        queryClient.setQueryData<ModalOpenStateType>(
            [QUERY_KEYS.filterValue.modalOpenState],
            (oldState = initialModalOpenState) => ({
                ...oldState,
                notApprovedLoansDataModalOpenState: newNotApprovedLoansDataModalOpenState,
            })
        );
    };

    return {
        isLoansTypeModalOpenState: modalOpenState.isLoansTypeModalOpenState,
        notApprovedLoansDataModalOpenState: modalOpenState.notApprovedLoansDataModalOpenState,
        setIsLoansTypeModalOpenState,
        setNotApprovedLoansDataModalOpenState,
    };
};

export default useModalOpenState;
