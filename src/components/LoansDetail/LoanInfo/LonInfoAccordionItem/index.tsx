import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const LoanInfoAccordionItem = ({
    title,
    content,
    isOpen,
    toggleOpen,
}: {
    title: string;
    content: string;
    isOpen: boolean;
    toggleOpen: () => void;
}) => {
    return (
        <div className="mb-[15px]">
            <button className="flex justify-between w-full px-5 text-left" onClick={toggleOpen}>
                <span className=" min-h-[55px] truncate whitespace-pre-wrap py-[18px] text-sm font-medium tracking-[-0.01em] text-black">
                    {title}
                </span>
                <span className="py-[18px]">
                    {isOpen ? <FaChevronUp size={12} color="#B3B3B3" /> : <FaChevronDown size={12} color="#B3B3B3" />}
                </span>
            </button>
            {isOpen && (
                <div className="flex items-center justify-center overflow-visible">
                    <div className="mb-[-15px] bg-gray-99 px-6  py-[18px] w-full mx-auto">
                        {content.split('<br/>').map((line, index) => (
                            <span
                                className="whitespace-pre-wrap text-[13px] tracking-[-0.01em] text-gray-50 pb-44"
                                key={index}
                            >
                                {line}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
export default LoanInfoAccordionItem;
