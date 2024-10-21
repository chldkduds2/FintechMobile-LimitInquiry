import { useNavigate } from 'react-router-dom';
import { resetLoansTypeFilter } from '@/store/Slice/LoansFilterBarStateSlice/LoansTypeFilterBarModalStateSlice/reducer';
import { resetFilter } from '@/store/Slice/LoansFilterBarStateSlice/reducer';
import { useTransition } from 'react';
import { useDispatch } from 'react-redux';

const useLoansList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isPending, startTransition] = useTransition();

    const handleLoanClick = (loanId: string) => {
        startTransition(() => {
            navigate(`/loansDetail/${loanId}`);
        });
    };

    const handleRefreshClick = () => {
        dispatch(resetFilter()); // 필터 초기화 액션 디스패치
        resetLoansTypeFilter(); // 대출종류 필터 초기화
    };
    return { isPending, handleLoanClick, handleRefreshClick };
};

export default useLoansList;
