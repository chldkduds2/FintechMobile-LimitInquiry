import React from 'react';
import useCountdownToMidnight from '@/hooks/Common/CountdownToMidnight/useCountdownToMidnight';
import FaClockIcon from '@/assets/image/faClockIcon';

const CountdownToMidnight: React.FC = () => {
    const { timeLeft, hoursLeft } = useCountdownToMidnight();

    return (
        <div
            className={`flex items-center mt-3 mb-10 text-sm font-pretendard ${hoursLeft <= 8 ? 'text-[#ff7a44]' : 'text-[#545C6F]'}`}
        >
            <FaClockIcon color={hoursLeft <= 8 ? '#ff7a44' : '#545C6F'} bg={hoursLeft <= 8 ? '#FCF1EA' : '#EFF3F7'} />
            <h2 className="ml-1 mr-1">유효시간</h2>
            <p>{timeLeft}</p>
        </div>
    );
};

export default CountdownToMidnight;
