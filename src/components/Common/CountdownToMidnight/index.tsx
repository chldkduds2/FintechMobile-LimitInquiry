import React from 'react';
import { FaClock } from 'react-icons/fa';
import useCountdownToMidnight from '@/hooks/CountdownToMidnight/useCountdownToMidnight';

const CountdownToMidnight: React.FC = () => {
    const { timeLeft, hoursLeft } = useCountdownToMidnight();

    return (
        <div
            className={
                hoursLeft <= 9
                    ? 'flex items-center text-sm font-pretendard text-[#ff7a44] mt-3 mb-10'
                    : 'flex items-center text-sm font-pretendard text-uniqueGray-40 mt-3 mb-10'
            }
        >
            <FaClock className="mr-2" />
            <h2 className="mr-1">유효시간</h2>
            <p>{timeLeft}</p>
        </div>
    );
};

export default CountdownToMidnight;
