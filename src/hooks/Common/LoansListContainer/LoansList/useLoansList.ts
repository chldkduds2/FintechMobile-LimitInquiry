import { useNavigate } from 'react-router-dom';
import useLoansFilterBarState from '@/services/LoansFilterBarStateRepository/queries';
import { resetLoansTypeFilter } from '@/store/Slice/LoansFilterBarStateSlice/LoansTypeFilterBarModalStateSlice/reducer';
import { useTransition } from 'react';

const useLoansList = () => {
    const navigate = useNavigate();
    const { resetFilter } = useLoansFilterBarState();

    const [isPending, startTransition] = useTransition();

    const handleLoanClick = (loanId: string) => {
        startTransition(() => {
            navigate(`/loansDetail/${loanId}`);
        });
    };

    const handleRefreshClick = () => {
        resetFilter(); // 필터 초기화 액션 디스패치
        resetLoansTypeFilter(); // 대출종류 필터 초기화
    };
    return { isPending, handleLoanClick, handleRefreshClick };
};

export default useLoansList;
