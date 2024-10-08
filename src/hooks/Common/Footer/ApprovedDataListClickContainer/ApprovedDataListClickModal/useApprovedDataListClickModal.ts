import { useState } from 'react';
import useModalOpenState from '@/services/ModalOpenStateRepository/queries';
const modalPortal = document.getElementById('modal-portal')!;

const useApprovedDataListClickModal = () => {
    const { notApprovedLoansDataModalOpenState, setNotApprovedLoansDataModalOpenState } = useModalOpenState();
    const [isFailedDataListDetailBtnClick, setIsFailedDataListDetailBtnClick] = useState<boolean>(false);
    const [isRejectedDataListDetailBtnClick, setIsRejectedDataListDetailBtnClick] = useState<boolean>(false);

    const handlerApprovedDataListClickModalOpen = () => {
        setNotApprovedLoansDataModalOpenState(!notApprovedLoansDataModalOpenState);
    };

    const handlerFailedDataListDetailBtnClick = () => {
        setIsFailedDataListDetailBtnClick(!isFailedDataListDetailBtnClick);
    };

    const handlersRejectedDataListDetailBtnClick = () => {
        setIsRejectedDataListDetailBtnClick(!isRejectedDataListDetailBtnClick);
    };

    return {
        modalPortal,
        notApprovedLoansDataModalOpenState,
        isFailedDataListDetailBtnClick,
        isRejectedDataListDetailBtnClick,
        handlerApprovedDataListClickModalOpen,
        handlerFailedDataListDetailBtnClick,
        handlersRejectedDataListDetailBtnClick,
    };
};
export default useApprovedDataListClickModal;
