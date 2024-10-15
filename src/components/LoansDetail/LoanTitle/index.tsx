import { RxDividerVertical } from 'react-icons/rx';
import useLoansFormat from '@/hooks/LoansFormat/useLoansFormat';
import { LoansListTagsColor } from '@/utils/LoansListTagsColor';
import { LoansApply } from '@/types/ApprovedConditionsLoansDateType/approvedConditionsLoansDate.type';

const LoanTitle = ({ loanDetails }: { loanDetails: LoansApply }) => {
    const { loanLimitDateFormatted, loanRateDateFormatted } = useLoansFormat();

    return (
        <div className="mb-10 text-black">
            <div className="mt-1">
                <img
                    className="h-[52px] w-[52px]"
                    src={loanDetails.product.bank.bankLogoUrl}
                    alt={`${loanDetails.product.name} image error...`}
                />
                <div className="mt-2 text-[20px] font-bold leading-[27px] tracking-[-2%]">
                    {loanDetails.product.name}
                </div>
                <div className="mt-[2px] text-[20px] font-bold leading-[27px] tracking-[-2%]">
                    <span className="mr-[2px]">{loanDetails.product.bank.name}</span>
                </div>
                <div className="relative flex flex-col gap-[2px] pt-[40px] align-middle">
                    <div className="flex items-center gap-1">
                        <p className="text-black text-18-regular">연</p>
                        <div className="flex justify-start gap-5">
                            <div className="text-black text-25-medium">{loanRateDateFormatted(loanDetails)}</div>
                            {/* <RxDividerVertical size={34} color="#C1C2CA" /> */}
                            <div className="mt-2 w-[1px] h-[20px] bg-[#C1C2CA]"></div>
                            <div className="text-black text-25-medium">{loanLimitDateFormatted(loanDetails)}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-[6px]">
                <span className="flex items-center h-5 whitespace-nowrap rounde">
                    {loanDetails.product.tags.map((tag: any, tagIndex: number) => {
                        const { bg, text } = LoansListTagsColor[tag.text] || {
                            bg: 'bg-gray-95',
                            text: 'text-gray-40',
                        };
                        return tag.text === '오늘입금' ? (
                            tag.type === 'AVAILABLE_TODAY_DEPOSIT' && (
                                <span
                                    key={tagIndex}
                                    className={`mr-2 flex h-5 items-center whitespace-nowrap rounded-md ${bg} px-[6px] pt-[1px] text-11-medium leading-[15.95px] ${text}`}
                                >
                                    {tag.text}
                                </span>
                            )
                        ) : (
                            <span
                                key={tagIndex}
                                className={`mr-2 flex h-5 items-center whitespace-nowrap rounded-md ${bg} px-[6px] pt-[1px] text-11-medium leading-[15.95px] ${text}`}
                            >
                                {tag.text}
                            </span>
                        );
                    })}
                </span>
            </div>
        </div>
    );
};

export default LoanTitle;
