import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import useLoansListDate from '@/services/ApprovedConditionsLoansDateRepository/queries';
import useLoanFilterBarState from '@/services/LoansFilterBarStateRepository/queries';
import useLoansListSortState from '@/services/LoansListSortStateRepository/queries';
import { LoansTypeFilterType } from '@/types/Common/LoanFilterBarType/LoansTypeFilterModal.Type/loansTypeFilterModal.type';
import useLoansTypeFilterBarState from '@/services/LoansFilterBarStateRepository/LoansTypeFilterModalStateRepository/queries';

const useLoansFilteringAndSortingList = () => {
    const { data: approvedConditionsLoanListDate, isLoading, error } = useLoansListDate();
    const { loansFiterBarState } = useLoanFilterBarState();
    const { isRateSortState } = useLoansListSortState();
    const { loansTypeFilterModalState } = useLoansTypeFilterBarState();

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
            return loansTypeFilterModalState.some((type) => loan.product.name.includes(type));
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

    return { approvedConditionsLoansFilteringList, isLoading, error };
};

export default useLoansFilteringAndSortingList;
