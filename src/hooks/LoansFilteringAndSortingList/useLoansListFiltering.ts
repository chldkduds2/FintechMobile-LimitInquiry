import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { LoansApply } from '@/types/LoansListDateType/loansListDate.type';
import useLoansListDate from '@/services/LoansListDateRepository/queries';
import {
    selectLoansFilterBarState,
    selectLoansTypeFilterBarState,
    selectLoansListSortState,
} from '@/store/Selectors/index';
import { LoansTypeFilterType } from '@/types/LoanFilterBarType/LoansTypeFilterModalType/loansTypeFilterModal.type';

const useLoansFilteringAndSortingList = () => {
    const { data: LoansListDate = [], error } = useLoansListDate('condition_approved');
    const loansFilterBarState = useSelector(selectLoansFilterBarState) as string[];
    const loansTypeFilterModalState = useSelector(selectLoansTypeFilterBarState) as string[];
    const isRateSortState = useSelector(selectLoansListSortState);
    const [LoansFilteringAndSortingList, setLoansFilteringAndSortingList] = useState<LoansApply[]>(LoansListDate);

    useEffect(() => {
        let filteredList = LoansListDate;

        // [ 대출상품 속성 필터링 ]
        // - 전체 대출종류 포함 리스트 필터링
        const filterLoansByType = (loan: LoansApply) => {
            const loanTypes: LoansTypeFilterType[] = ['신용대출', '주택담보대출', '자동차담보대출', '대환대출'];
            return loanTypes.some((type) => loan.product.name.includes(type));
        };

        // - 태그 포함 리스트 필터링
        const filterLoansByTags = (loan: LoansApply) => {
            return loan.product.tags.some((tag) => loansFilterBarState.includes(tag.text));
        };

        // (1)
        if (loansFilterBarState.length > 0) {
            // (1-1)
            if (loansFilterBarState.includes('대출종류')) {
                filteredList = filteredList.filter(filterLoansByType);
            }

            // (1-2)
            else {
                filteredList = filteredList.filter(filterLoansByTags);
            }
        }

        // (2)
        if (loansTypeFilterModalState.length > 0) {
            filteredList = filteredList.filter((loan) =>
                loansTypeFilterModalState.some((type) => loan.product.name.includes(type))
            );

            // (2-1)
            if (loansFilterBarState.length > 1) {
                filteredList = filteredList.filter(filterLoansByTags);
            }
        }

        // [ 정렬 로직 ]
        filteredList = filteredList.sort((a, b) => {
            return isRateSortState
                ? (a.condition?.loanRate ?? 0) - (b.condition?.loanRate ?? 0)
                : (b.condition?.loanLimit ?? 0) - (a.condition?.loanLimit ?? 0);
        });

        // 필터링 및 정렬된 리스트 상태 업데이트
        setLoansFilteringAndSortingList(filteredList);
    }, [LoansListDate, loansFilterBarState, loansTypeFilterModalState, isRateSortState]);

    return { LoansFilteringAndSortingList, error };
};

export default useLoansFilteringAndSortingList;
