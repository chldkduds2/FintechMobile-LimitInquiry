import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { LuCalendar } from 'react-icons/lu';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';

const LoanCalculator = () => {
    return (
        <div className="mx-5 my-[30px] text-black">
            <div className="relative flex justify-between align-top">
                <div className="flex flex-wrap justify-start gap-1">
                    <div className="font-bold leading-[21.6px] tracking-[-2%]">첫 달 갚을 금액</div>
                    <div className="font-bold leading-[21.6px] tracking-[-2%] text-indigo-50">0원</div>
                </div>
            </div>
            <div className="mt-[20px]">
                <div className="flex justify-start gap-[6px] align-middle text-xs font-medium leading-[18px] text-gray-50">
                    <RiMoneyDollarCircleLine size={18} color="text-gray-50" />
                    0만원
                </div>
                <div className="mt-[7px] flex justify-start gap-[6px] align-middle text-xs font-medium leading-[18px] text-gray-50">
                    <LuCalendar color="text-gray-50" size={18} />
                    60개월
                </div>
                <div className="mt-[7px] flex justify-start gap-[6px] align-middle text-xs font-medium leading-[18px] text-gray-50">
                    <TbAdjustmentsHorizontal color="text-gray-50" size={18} />
                    원금 균등 상환 시
                </div>
            </div>
        </div>
    );
};
export default LoanCalculator;
