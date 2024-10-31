import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoansFilterType } from '@/types/LoanFilterBarType/loanFilterBar.type';
import { addFilter, removeFilter, resetFilter } from '@/store/Slice/LoansFilterBarStateSlice/reducer';
import { selectLoansFilterBarState } from '@/store/Selectors/index';
import { resetLoansTypeFilter } from '@/store/Slice/LoansFilterBarStateSlice/LoansTypeFilterBarModalStateSlice/reducer';

export const useLoansFilterBar = () => {
    const dispatch = useDispatch();
    const loansFilterBarState = useSelector(selectLoansFilterBarState) as string[];

    const filters: LoansFilterType[] = ['오늘입금', '계좌개설 없음', '중도상환수수료 없음', '1금융', '대출종류'];

    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const [showRefresh, setShowRefresh] = useState<boolean>(false);

    const toggleExpand = (forceExpand?: boolean) => {
        setIsExpanded(forceExpand !== undefined ? forceExpand : !isExpanded);
    };

    const handleFilterClick = (filter: string) => {
        if (loansFilterBarState.includes(filter)) {
            dispatch(removeFilter(filter));
        } else {
            dispatch(addFilter(filter));
        }

        // [ 새로고침 버튼 표시 여부 결정 ]
        if (loansFilterBarState.length === 1 && loansFilterBarState.includes(filter)) {
            setShowRefresh(false); // 마지막 필터가 제거되면 새로고침 버튼 숨기기
            toggleExpand(false); // 필터가 없으면 아코디언 접기
        } else {
            setShowRefresh(true); // 필터가 있으면 새로고침 버튼 보이기
            toggleExpand(true); // 필터가 추가되면 아코디언 펼치기
        }
    };

    const handleRefreshClick = () => {
        dispatch(resetFilter());
        setShowRefresh(false);
        toggleExpand(false);
        dispatch(resetLoansTypeFilter());
    };

    return {
        filters,
        isExpanded,
        loansFilterBarState,
        showRefresh,
        toggleExpand,
        handleFilterClick,
        handleRefreshClick,
    };
};

//트랜지션, 뮤테이션
