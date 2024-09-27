import { useEffect, useState } from 'react';

const useCountdownToMidnight = () => {
    const [timeLeft, setTimeLeft] = useState<string>('00:00:00');
    const [hoursLeft, setHoursLeft] = useState<number>(0);

    const calculateTimeLeft = () => {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);

        const difference = midnight.getTime() - now.getTime();
        const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
        const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft(
            `${String(hours).padStart(2, '0')}: ${String(minutes).padStart(2, '0')}: ${String(seconds).padStart(2, '0')}`
        );
        setHoursLeft(hours);
    };

    useEffect(() => {
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return { timeLeft, hoursLeft };
};

export default useCountdownToMidnight;
