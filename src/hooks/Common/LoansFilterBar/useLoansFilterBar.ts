import { useState } from 'react';
import { LoansFilterType } from '@/types/Common/LoanFilterBarType/loanFilterBar.type';
import useLoansFilterBarState from '@/services/LoansFilterBarStateRepository/queries';
import useLoansTypeFilterBarState from '@/services/LoansFilterBarStateRepository/LoansTypeFilterModalStateRepository/queries';

export const useLoansFilterBar = () => {
    const filters: LoansFilterType[] = ['오늘입금', '계좌개설 없음', '중도상환수수료 없음', '1금융', '대출종류'];

    const { loansFiterBarState, addFilter, removeFilter, resetFilter } = useLoansFilterBarState();
    const { resetLoansTypeFilter } = useLoansTypeFilterBarState();

    const [isExpanded, setIsExpanded] = useState(false);
    const [showRefresh, setShowRefresh] = useState<boolean>(false);

    const toggleExpand = (forceExpand?: boolean) => {
        setIsExpanded(forceExpand !== undefined ? forceExpand : !isExpanded);
    };

    const handleFilterClick = (filter: string) => {
        // [ 윈도우 스크롤 이동]
        if (window.scrollY < 320) {
            window.scrollTo({ left: 0, top: 320, behavior: 'smooth' });
        }
        if (loansFiterBarState.includes(filter)) {
            removeFilter(filter); // 필터 제거
        } else {
            addFilter(filter); // 필터 추가
        }

        // [ 새로고침 버튼 표시 여부 결정 ]
        if (loansFiterBarState.length === 1 && loansFiterBarState.includes(filter)) {
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
        resetLoansTypeFilter(); // 대출종류 필터 초기화
    };

    return {
        filters,
        isExpanded,
        loansFiterBarState,
        showRefresh,
        toggleExpand,
        handleFilterClick,
        handleRefreshClick,
    };
};
