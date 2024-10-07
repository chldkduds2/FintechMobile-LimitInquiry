import useLoansFilterBarState from '@/services/LoansFilterBarStateRepository/queries';
import useLoansTypeFilterBarState from '@/services/LoansFilterBarStateRepository/LoansTypeFilterModalStateRepository/queries';

const useLoansList = () => {
    const { resetFilter } = useLoansFilterBarState();
    const { resetLoansTypeFilter } = useLoansTypeFilterBarState();

    const handleRefreshClick = () => {
        resetFilter(); // 필터 초기화 액션 디스패치
        resetLoansTypeFilter(); // 대출종류 필터 초기화
    };
    return { handleRefreshClick };
};
export default useLoansList;
