import React from 'react'
import Title from '../Common/Title/index'
import TitleLoanRateLimitList from '../Common/Title/TitleLoanRateLimitList'
import LoanFilterBar from '../Common/LoanFilterBar/index'
import Container from '@/components/Common/FintechMobalieLayout/FintechMobalieContentLayout/'

const Home = () => {
    return (
        <>
            <Container>
                <Title />
                <TitleLoanRateLimitList />
            </Container>
            <div className="h-[10px] w-full bg-gray-99" />
            <Container>
                <LoanFilterBar />
            </Container>
        </>
    )
}

export default Home
