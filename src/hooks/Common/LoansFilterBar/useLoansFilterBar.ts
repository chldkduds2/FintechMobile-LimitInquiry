import { useState } from 'react';
import { LoanFilterType } from '@/types/Common/LoanFilterBarType/loanFilterBar.type';
import useLoanFilterBarState from '@/services/LoanFilterBarStateRepository/queries';

export const useLoansFilterBar = () => {
    const filters: LoanFilterType[] = ['오늘입금', '계좌개설 없음', '중도상환수수료 없음', '1금융', '대출종류'];
    const { loansFiterBarState: activeFilters, addFilter, removeFilter, resetFilter } = useLoanFilterBarState();

    const [isExpanded, setIsExpanded] = useState(false);
    const [showRefresh, setShowRefresh] = useState<boolean>(false);

    const toggleExpand = (forceExpand?: boolean) => {
        setIsExpanded(forceExpand !== undefined ? forceExpand : !isExpanded);
    };

    const handleFilterClick = (filter: string) => {
        if (activeFilters.includes(filter)) {
            removeFilter(filter); // 필터 제거
        } else {
            addFilter(filter); // 필터 추가
        }

        // [ 새로고침 버튼 표시 여부 결정 ]
        if (activeFilters.length === 1 && activeFilters.includes(filter)) {
            setShowRefresh(false); // 마지막 필터가 제거되면 새로고침 버튼 숨기기
            toggleExpand(false); // 필터가 없으면 아코디언 접기
        } else {
            setShowRefresh(true); // 필터가 있으면 새로고침 버튼 보이기
            toggleExpand(true); // 필터가 추가되면 아코디언 펼치기
        }
    };

    const handleRefreshClick = () => {
        resetFilter(); // 필터 초기화 액션 디스패치
        setShowRefresh(false); // 새로고침 버튼 숨기기
        toggleExpand(false); // 필터 초기화 시 아코디언 접기
    };

    return { filters, isExpanded, activeFilters, showRefresh, toggleExpand, handleFilterClick, handleRefreshClick };
};
