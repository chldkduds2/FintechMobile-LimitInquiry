import useApprovedDataListClickContainer from '@/hooks/Common/Footer/ApprovedDataListClickContainer/ApprovedDataListClickModal/useApprovedDataListClickModal';
import ApprovedDataListClickModal from '@/components/Common/Footer/ApprovedDataListClickModal/index';

const approvedDataListClickContainer = () => {
    const { notApprovedLoansDataModalOpenState, handlerApprovedDataListClickModalOpen } =
        useApprovedDataListClickContainer();

    return (
        <div>
            {notApprovedLoansDataModalOpenState && <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>}
            <div className="h-[10px] w-full bg-gray-99" />
            <div className="pb-10 mx-5">
                <div className="w-full px-5 mt-10 rounded-lg bg-uniqueGray-95">
                    <div className="flex items-center justify-between">
                        <div className="my-[18px]">
                            <div className="text-[12px] font-[500] text-[#707070]">다른 조건으로 조회해볼까요?</div>
                            <div className="text-[12px]  text-gray-40 font-bold">조회 기록이 한 번 더 발생합니다.</div>
                        </div>
                        <button className="cursor-pointer rounded-full border border-uniqueGray-95 bg-white px-[12px] py-2 text-[12px] font-bold text-gray-50 hover:border hover:border-gray-80 focus:border focus:border-gray-80">
                            다시 조회하기
                        </button>
                    </div>
                </div>
                <div
                    onClick={handlerApprovedDataListClickModalOpen}
                    className="mt-[37px] cursor-pointer text-center text-sm text-gray-40 underline"
                >
                    미승인 내역 확인하기
                </div>
            </div>
            {notApprovedLoansDataModalOpenState && <ApprovedDataListClickModal />}
        </div>
    );
};
export default approvedDataListClickContainer;
