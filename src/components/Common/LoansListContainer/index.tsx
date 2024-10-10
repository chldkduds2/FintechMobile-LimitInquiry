import React from 'react';
import LoansListHeader from './LoansListHeader';
import LoansList from './LoansList';

const LoansListContainer = () => {
    return (
        <React.Fragment>
            <LoansListHeader />
            <LoansList />
        </React.Fragment>
    );
};
export default LoansListContainer;
