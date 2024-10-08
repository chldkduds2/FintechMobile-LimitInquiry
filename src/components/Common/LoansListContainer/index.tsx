import React from 'react';
import LoansListHeader from './LoansListHeader';
import LoansList from './LoansList';
import Footer from '../Footer/index';

const LoansListContainer = () => {
    return (
        <React.Fragment>
            <LoansListHeader />
            <LoansList />
            <Footer />
        </React.Fragment>
    );
};
export default LoansListContainer;
