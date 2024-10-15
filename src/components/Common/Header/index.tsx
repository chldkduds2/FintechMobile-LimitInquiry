import { useNavigate, useLocation } from 'react-router-dom';
import HeadeArrowIcon from '@/assets/image/headeArrowIcon';
import LoansFilterBar from '../LoansFilterBar';
import { memo } from 'react';

const Header = memo(({ position }: { position: number }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleButtonClick = () => {
        navigate('/');
    };

    const shouldShowShadow = pathname === '/' && position > 360;

    console.log(`Position: ${position}`);

    return (
        <div className={`flex flex-col h-full  ${shouldShowShadow ? 'shadow-[0px_9px_10px_rgba(0,0,0,0.1)]' : ''}`}>
            <div className="flex h-[15px] items-center justify-between">
                <button
                    onClick={handleButtonClick}
                    className="h-full w-[55px] flex items-center justify-center active:bg-gray-95 mt-10"
                >
                    <HeadeArrowIcon />
                </button>
            </div>

            {shouldShowShadow && (
                <div className="p-5">
                    <LoansFilterBar />
                </div>
            )}
        </div>
    );
});

export default Header;
