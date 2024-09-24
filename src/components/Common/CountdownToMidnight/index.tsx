import React, { useState } from 'react'
import { FaClock } from 'react-icons/fa'
import useCountdownToMidnight from '@/hooks/CountdownToMidnight/useCountdownToMidnight'

const CountdownToMidnight: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0])
    const { timeLeft, hoursLeft } = useCountdownToMidnight()

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value)
    }

    return (
        <div
            className={
                hoursLeft <= 10
                    ? 'flex items-center text-sm font-pretendard text-[#ff7a44] mt-3 mb-10'
                    : 'flex items-center text-sm font-pretendard text-uniqueGray-40 mt-3 mb-10'
            }
        >
            <FaClock className="mr-2" />
            <h2 className="mr-1">유효시간</h2>
            <p>{timeLeft}</p>
        </div>
    )
}

export default CountdownToMidnight
