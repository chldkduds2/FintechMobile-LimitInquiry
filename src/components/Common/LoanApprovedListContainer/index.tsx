import React from 'react';
import LoanApprovedListHeader from './LoanApprovedListHeader';
import LoanApprovedList from './LoanApprovedList';

const LoanApprovedListContainer = () => {
    return (
        <React.Fragment>
            <LoanApprovedListHeader />
            <LoanApprovedList />
        </React.Fragment>
    );
};
export default LoanApprovedListContainer;
