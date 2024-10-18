import { useSelector } from 'react-redux';
import { LoansApply } from '@/types/ApprovedConditionsLoansDateType/approvedConditionsLoansDate.type';
import useLoansListDate from '@/services/ApprovedConditionsLoansDateRepository/queries';
import {
    selectLoansFilterBarState,
    selectLoansTypeFilterBarState,
    selectLoansListSortState,
} from '@/store/Selectors/index';
import { LoansTypeFilterType } from '@/types/Common/LoanFilterBarType/LoansTypeFilterModalType/loansTypeFilterModal.type';

const useLoansFilteringAndSortingList = () => {
    const { data: approvedConditionsLoanListDate, error } = useLoansListDate('condition_approved');
    const loansFiterBarState = useSelector(selectLoansFilterBarState) as string[];
    const loansTypeFilterModalState = useSelector(selectLoansTypeFilterBarState) as unknown as string[];
    const isRateSortState = useSelector(selectLoansListSortState);

    let approvedConditionsLoansFilteringList = approvedConditionsLoanListDate;

    // 데이터 필터링
    if (loansFiterBarState.length > 0) {
        // 대출종류 데이터 필터링
        if (loansFiterBarState.includes('대출종류')) {
            approvedConditionsLoansFilteringList = approvedConditionsLoansFilteringList?.filter((loan: LoansApply) => {
                const loanTypes: LoansTypeFilterType[] = ['신용대출', '주택담보대출', '자동차담보대출', '대환대출'];
                return loanTypes.some((type) => loan.product.name.includes(type));
            });
        } else {
            approvedConditionsLoansFilteringList = approvedConditionsLoanListDate?.filter((loan: LoansApply) => {
                return loan.product.tags.some((tag) => loansFiterBarState.includes(tag.text));
            });
        }
    }

    // 대출종류데이터 세부 필터링
    if (loansTypeFilterModalState.length > 0) {
        approvedConditionsLoansFilteringList = approvedConditionsLoansFilteringList?.filter((loan: LoansApply) => {
            return loansTypeFilterModalState.some((type: string) => loan.product.name.includes(type));
        });
    }

    if (approvedConditionsLoansFilteringList) {
        // 정렬 로직
        approvedConditionsLoansFilteringList = approvedConditionsLoansFilteringList.sort((a, b) => {
            if (isRateSortState) {
                return (a.condition?.loanRate ?? 0) - (b.condition?.loanRate ?? 0);
            } else {
                return (b.condition?.loanLimit ?? 0) - (a.condition?.loanLimit ?? 0);
            }
        });
    }

    return { approvedConditionsLoansFilteringList, error };
};

export default useLoansFilteringAndSortingList;
