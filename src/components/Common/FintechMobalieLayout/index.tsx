import { useEffect, useRef } from 'react';
import type { PropsWithChildren } from 'react';
import '@/components/Common/FintechMobalieLayout/FintechMobalieContentLayout';
import useLoansFilterBarState from '@/services/LoansFilterBarStateRepository/queries';
import useModalOpenState from '@/services/ModalOpenStateRepository/queries';

const FintechMobalieLayout = ({ children }: PropsWithChildren) => {
    const { loansFiterBarState } = useLoansFilterBarState();
    const { isLoansTypeModalOpenState, notApprovedLoansDataModalOpenState } = useModalOpenState();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (loansFiterBarState.length > 0 && scrollRef.current) {
            scrollRef.current.scrollTo({ top: 290, behavior: 'smooth' });
        }
    }, [loansFiterBarState]);

    return (
        <div className="flex justify-center mt-10 contain-conten no-scrollbar">
            <div
                ref={scrollRef}
                className={`max-w-[427px] h-full font-sans max-h-screen no-scrollbar ${isLoansTypeModalOpenState || notApprovedLoansDataModalOpenState ? 'overflow-hidden' : 'overflow-y-scroll'}`}
            >
                {children}
            </div>
        </div>
    );
};

export default FintechMobalieLayout;
