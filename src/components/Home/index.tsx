import React from 'react';
import MainTitleContainer from '../Common/MainTitleContainer/index';
import LoanRateLimitList from '../Common/MainTitleContainer/LoanRateLimitList';
import LoanFilterBar from '../Common/LoanFilterBar/index';
import FintechMobalieContentLayout from '@/components/Common/FintechMobalieLayout/FintechMobalieContentLayout/index';
import LoanApprovedListContainert from '../Common/LoanApprovedListContainer/index';

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
                <LoanApprovedListContainert />
            </FintechMobalieContentLayout>
        </React.Fragment>
    );
};

export default Home;
