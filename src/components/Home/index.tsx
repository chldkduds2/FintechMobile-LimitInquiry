import React from 'react';
import MainTitleContainer from '../Common/MainTitleContainer/index';
import LoanRateLimitList from '../Common/MainTitleContainer/LoanRateLimitList';
import LoanFilterBar from '../Common/LoansFilterBar/index';
import FintechMobalieContentLayout from '@/components/Common/FintechMobalieLayout/FintechMobalieContentLayout/index';
import LoansListContainert from '../Common/LoansListContainer/index';

const Home = () => {
    return (
        <React.Fragment>
            <FintechMobalieContentLayout>
                <MainTitleContainer />
                <LoanRateLimitList />
            </FintechMobalieContentLayout>
            <div className="h-[10px] w-full bg-gray-99" />
            <FintechMobalieContentLayout>
                <LoanFilterBar />
                <LoansListContainert />
            </FintechMobalieContentLayout>
        </React.Fragment>
    );
};

export default Home;
