import { LoansApply } from '@/types/ApprovedConditionsLoansDate/approvedConditionsLoansDate.type';
import useLoansListDate from '@/services/ApprovedConditionsLoansDateRepository/queries';
import useLoanFilterBarState from '@/services/LoanFilterBarStateRepository/queries';
import useLoansListSortState from '@/services/LoansListSortStateRepository/queries';

const useLoansFilteringAndSortingList = () => {
    const { data: approvedConditionsLoanListDate, isLoading, error } = useLoansListDate();
    const { loansFiterBarState } = useLoanFilterBarState();
    const { isRateSortState } = useLoansListSortState();

    let approvedConditionsLoansFilteringList = approvedConditionsLoanListDate;

    if (loansFiterBarState.length > 0) {
        approvedConditionsLoansFilteringList = approvedConditionsLoanListDate?.filter((loan: LoansApply) => {
            return loan.product.tags.some((tag) => loansFiterBarState.includes(tag.text));
        });
    }

    // 정렬 로직
    if (approvedConditionsLoansFilteringList) {
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
