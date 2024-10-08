import { useNavigate } from 'react-router-dom';
import useLoansFilterBarState from '@/services/LoansFilterBarStateRepository/queries';
import useLoansTypeFilterBarState from '@/services/LoansFilterBarStateRepository/LoansTypeFilterModalStateRepository/queries';

const useLoansList = () => {
    const navigate = useNavigate();
    const { resetFilter } = useLoansFilterBarState();
    const { resetLoansTypeFilter } = useLoansTypeFilterBarState();

    const handleLoanClick = (loanId: string) => {
        navigate(`/loans/${loanId}`);
    };

    const handleRefreshClick = () => {
        resetFilter(); // 필터 초기화 액션 디스패치
        resetLoansTypeFilter(); // 대출종류 필터 초기화
    };
    return { handleLoanClick, handleRefreshClick };
};
export default useLoansList;
