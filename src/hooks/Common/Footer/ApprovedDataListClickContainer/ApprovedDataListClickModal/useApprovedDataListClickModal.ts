import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotApprovedLoansDataModalOpenState } from '@/store/Selectors/index';
import { setNotApprovedLoansDataModalOpenState } from '@/store/Slice/ModalOpenStateSlice/reducer';
const modalPortal = document.getElementById('modal-portal')!;

const useApprovedDataListClickModal = () => {
    const [isFailedDataListDetailBtnClick, setIsFailedDataListDetailBtnClick] = useState<boolean>(false);
    const [isRejectedDataListDetailBtnClick, setIsRejectedDataListDetailBtnClick] = useState<boolean>(false);
    const dispatch = useDispatch();
    const notApprovedLoansDataModalOpenState = useSelector(selectNotApprovedLoansDataModalOpenState);

    const handlerApprovedDataListClickModalOpen = () => {
        dispatch(setNotApprovedLoansDataModalOpenState(!notApprovedLoansDataModalOpenState));
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
