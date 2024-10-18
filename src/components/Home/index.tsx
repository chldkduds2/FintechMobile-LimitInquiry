import React from 'react';
import MainTitleContainer from '../Common/MainTitleContainer/index';
import LoanRateLimitList from '../Common/MainTitleContainer/LoanRateLimitList';
import LoanFilterBar from '../Common/LoansFilterBar/index';
import FintechMobalieContentLayout from '@/components/Common/FintechMobalieLayout/FintechMobalieContentLayout/index';
import LoansListContainert from '../Common/LoansListContainer/index';
import Footer from '@/components/Common/Footer/index';
import { useSelector } from 'react-redux';
import { selectPositionState } from '@/store/Selectors/index';

const Home = () => {
    const position = useSelector(selectPositionState);
    return (
        <React.Fragment>
            <FintechMobalieContentLayout>
                <MainTitleContainer />
                <LoanRateLimitList />
            </FintechMobalieContentLayout>
            <div className="h-[10px] w-full bg-gray-99" />
            <FintechMobalieContentLayout>
                <div className={`${position > 260 ? 'hidden' : ''} `}>
                    <LoanFilterBar />
                </div>
                <LoansListContainert />
            </FintechMobalieContentLayout>
            <Footer />
        </React.Fragment>
    );
};

export default Home;
