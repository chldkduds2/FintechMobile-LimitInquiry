import { useState } from 'react'
import CountdownToMidnight from '../CountdownToMidnight'
import { useConditionRejectedCount } from '@/hooks/LoanRateLimitList/useLoanRateLimitList'

const Navbar = () => {
    const { data: conditionRejectedCount } = useConditionRejectedCount()
    const titleMessage = `오늘만 가능한 ${conditionRejectedCount}개 조건으로<br /> 바로 대출 받으세요`

    return (
        <div>
            <header>
                <h1
                    className="mt-5 whitespace-pre-wrap text-xl font-bold leading-[27px] text-black"
                    dangerouslySetInnerHTML={{ __html: titleMessage }}
                ></h1>
                <CountdownToMidnight />
            </header>
        </div>
    )
}

export default Navbar
