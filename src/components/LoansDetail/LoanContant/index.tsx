import AiOutlineQuestionCircleIco from '@/assets/image/aiOutlineQuestionCircleIcon';
import BankIcon from '@/assets/image/bankIcon';
import FeeIcon from '@/assets/image/feeIcon';
import UnFeeIcon from '@/assets/image/unFeeIcon';

const LoanContent = ({ hasRedemptionFeeTag }: { hasRedemptionFeeTag: boolean }) => {
    return (
        <div className="flex flex-col mt-8 mb-8 text-black">
            <div className="flex">
                <BankIcon />
                <div className="flex-row ml-5">
                    <div className="flex items-start justify-start text-16-bold">
                        <div>개좌개설이</div>
                        <div className="ml-1 text-indigo-50">필요없어요</div>
                        <button type="button">
                            <AiOutlineQuestionCircleIco />
                        </button>
                    </div>
                    <div className="mt-1 text-xs font-medium text-gray-50">
                        모든 은행 계좌로 대출금 입금이 가능해요.
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className="flex">
                    {hasRedemptionFeeTag ? <FeeIcon /> : <UnFeeIcon />}

                    <div className="flex-row ml-5">
                        <div className="flex items-start justify-start text-16-bold">
                            <div>중도상환수수료가</div>
                            <div className={`ml-1 text-indigo-50`}>{hasRedemptionFeeTag ? '없어요' : '있어요'}</div>
                        </div>
                        <div className="mt-1 text-xs font-medium text-gray-50">
                            {hasRedemptionFeeTag
                                ? '언제 상환해도 수수료가 무료예요.'
                                : '최소 0% ~ 최대 2% 수수료가 발생해요.'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanContent;
