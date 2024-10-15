import React from 'react';
import useCountdownToMidnight from '@/hooks/Common/CountdownToMidnight/useCountdownToMidnight';
import FaClockIcon from '@/assets/image/faClockIcon';

const CountdownToMidnight: React.FC = () => {
    const { timeLeft, hoursLeft } = useCountdownToMidnight();

    return (
        <div
            className={
                hoursLeft <= 8
                    ? 'flex items-center text-sm font-pretendard text-[#ff7a44] mt-3 mb-10'
                    : 'flex items-center text-sm font-pretendard text-uniqueGray-40 mt-3 mb-10'
            }
        >
            <FaClockIcon />
            <h2 className="ml-1">유효시간</h2>
            <p>{timeLeft}</p>
        </div>
    );
};

export default CountdownToMidnight;
