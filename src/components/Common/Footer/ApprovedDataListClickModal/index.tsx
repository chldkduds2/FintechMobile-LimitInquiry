import React from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';
import useApprovedDataListClickModal from '@/hooks/Common/Footer/ApprovedDataListClickContainer/ApprovedDataListClickModal/useApprovedDataListClickModal';
import useApprovedConditionsLoansListDate from '@/services/ApprovedConditionsLoansDateRepository/queries';

const ApprovedDataListClickModal = () => {
    const {
        modalPortal,
        notApprovedLoansDataModalOpenState,
        isFailedDataListDetailBtnClick,
        isRejectedDataListDetailBtnClick,
        handlerApprovedDataListClickModalOpen,
        handlerFailedDataListDetailBtnClick,
        handlersRejectedDataListDetailBtnClick,
    } = useApprovedDataListClickModal();
    const { data: failedConditionsLoansListDate = [] } = useApprovedConditionsLoansListDate('condition_failed');
    const { data: rejectedConditionsLoansListDate = [] } = useApprovedConditionsLoansListDate('condition_rejected');

    return ReactDOM.createPortal(
        <div
            className={`fixed top-0 bottom-0 left-0 z-50 flex items-center justify-center w-full transition-opacity duration-300 ${notApprovedLoansDataModalOpenState ? 'opacity-100' : 'opacity-0'}`}
        >
            <div
                className={`w-[27rem] max-h-[40rem] p-7 bg-white shadow-lg overflow-y-auto no-scrollbar transform transition-transform duration-300 ${notApprovedLoansDataModalOpenState ? 'scale-100' : 'scale-95'}`}
            >
                <div className="relative flex justify-center w-full">
                    <IoClose
                        className="absolute left-0 cursor-pointer"
                        color="black"
                        size={24}
                        onClick={handlerApprovedDataListClickModalOpen}
                    />
                    <div className="text-lg font-bold">미승인 내역</div>
                </div>
                <div>
                    <div className="flex text-sm font-bold mt-7">
                        <span className="mr-1">오류</span>
                        <span className="text-indigo-50">{failedConditionsLoansListDate.length}건</span>
                    </div>

                    {isFailedDataListDetailBtnClick ? (
                        <React.Fragment>
                            {failedConditionsLoansListDate.map((failedConditionsLoansList, index) => (
                                <div
                                    key={index}
                                    className="mt-[18px] flex w-full items-start justify-start gap-[16px] px-1 border-b border-[#c1c2ca]/30 pb-[18px]"
                                >
                                    <img
                                        className="h-[34px] w-[34px] align-top"
                                        src={failedConditionsLoansList.product.bank.bankLogoUrl}
                                        alt={`${failedConditionsLoansList.product.name} image error...`}
                                    />
                                    <div>
                                        <div className="text-[16px] font-[500]">
                                            {failedConditionsLoansList.product.name}
                                        </div>
                                        <div className="text-[13px] text-gray-40">
                                            {failedConditionsLoansList.product.bank.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {failedConditionsLoansListDate.map((failedConditionsLoansList, index) => (
                                <React.Fragment key={index}>
                                    {index <= 1 && (
                                        <div className="mt-[18px] flex w-full items-start justify-start gap-[16px] px-1 border-b border-[#c1c2ca]/30 pb-[18px]">
                                            <img
                                                className="h-[34px] w-[34px] align-top"
                                                src={failedConditionsLoansList.product.bank.bankLogoUrl}
                                                alt={`${failedConditionsLoansList.product.name} image error...`}
                                            />
                                            <div>
                                                <div className="text-[16px] font-[500]">
                                                    {failedConditionsLoansList.product.name}
                                                </div>
                                                <div className="text-[13px] text-gray-40">
                                                    {failedConditionsLoansList.product.bank.name}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    )}

                    <div className="mx-auto mt-10 mb-10 flex h-[44px] w-[138px] cursor-pointer flex-col justify-center rounded-full border border-blue-99 text-center text-sm text-gray-50 hover:bg-[#9fa0ad]/10 focus:bg-[#9fa0ad]/10">
                        <div
                            onClick={handlerFailedDataListDetailBtnClick}
                            className="flex justify-center gap-1 mx-auto align-middle"
                        >
                            더보기
                        </div>
                    </div>
                </div>

                <div className="h-[8px] w-full bg-gray-99" />
                <div>
                    <div className="flex text-sm font-bold mt-7">
                        <span className="mr-1">대출 거절</span>
                        <span className="text-indigo-50">{rejectedConditionsLoansListDate.length}건</span>
                    </div>

                    {isRejectedDataListDetailBtnClick ? (
                        <React.Fragment>
                            {rejectedConditionsLoansListDate.map((rejectedConditionsLoansList, index) => (
                                <div
                                    key={index}
                                    className="mt-[18px] flex w-full items-start justify-start gap-[16px] px-1 border-b border-[#c1c2ca]/30 pb-[18px]"
                                >
                                    <img
                                        className="h-[34px] w-[34px] align-top"
                                        src={rejectedConditionsLoansList.product.bank.bankLogoUrl}
                                        alt={`${rejectedConditionsLoansList.product.name} image error...`}
                                    />
                                    <div>
                                        <div className="text-[16px] font-[500]">
                                            {rejectedConditionsLoansList.product.name}
                                        </div>
                                        <div className="text-[13px] text-gray-40">
                                            {rejectedConditionsLoansList.product.bank.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {rejectedConditionsLoansListDate.map((rejectedConditionsLoansList, index) => (
                                <React.Fragment key={index}>
                                    {index <= 1 && (
                                        <div className="mt-[18px] flex w-full items-start justify-start gap-[16px] px-1 border-b border-[#c1c2ca]/30 pb-[18px]">
                                            <img
                                                className="h-[34px] w-[34px] align-top"
                                                src={rejectedConditionsLoansList.product.bank.bankLogoUrl}
                                                alt={`${rejectedConditionsLoansList.product.name} image error...`}
                                            />
                                            <div>
                                                <div className="text-[16px] font-[500]">
                                                    {rejectedConditionsLoansList.product.name}
                                                </div>
                                                <div className="text-[13px] text-gray-40">
                                                    {rejectedConditionsLoansList.product.bank.name}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    )}

                    <div className="mx-auto mt-10 mb-10 flex h-[44px] w-[138px] cursor-pointer flex-col justify-center rounded-full border border-blue-99 text-center text-sm text-gray-50 hover:bg-[#9fa0ad]/10 focus:bg-[#9fa0ad]/10">
                        <div
                            onClick={handlersRejectedDataListDetailBtnClick}
                            className="flex justify-center gap-1 mx-auto align-middle"
                        >
                            더보기
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        modalPortal
    );
};

export default ApprovedDataListClickModal;
