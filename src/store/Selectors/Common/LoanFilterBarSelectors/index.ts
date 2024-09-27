import { RootState } from '@/store';

export const loanFilterSelect = (state: RootState) => state.loanFilter.activeFilters;
