import { useState, useEffect, useRef, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import useLoansFilterBarState from '@/services/LoansFilterBarStateRepository/queries';
import useModalOpenState from '@/services/ModalOpenStateRepository/queries';
import Header from '@/components/Common/Header/index';

const FintechMobalieLayout = ({ children }: PropsWithChildren) => {
    const { loansFiterBarState } = useLoansFilterBarState();
    const { isLoansTypeModalOpenState, notApprovedLoansDataModalOpenState } = useModalOpenState();
    const scrollRef = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();
    const [position, setPosition] = useState(0);

    const onScroll = () => {
        if (scrollRef.current) {
            setPosition(scrollRef.current.scrollTop);
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        currentRef?.addEventListener('scroll', onScroll);

        return () => {
            currentRef?.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname]);

    useEffect(() => {
        if (loansFiterBarState.length > 0 && scrollRef.current) {
            scrollRef.current.scrollTo({ top: 290, behavior: 'smooth' });
        }
    }, [loansFiterBarState]);

    return (
        <div>
            <Header position={position} />
            <div className={`flex justify-center contain-conten ${position > 360 ? '' : ' mt-10'}`}>
                <div
                    ref={scrollRef}
                    className={`max-w-[427px] h-full font-sans max-h-screen no-scrollbar ${isLoansTypeModalOpenState || notApprovedLoansDataModalOpenState ? 'overflow-hidden' : 'overflow-y-scroll'}`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FintechMobalieLayout;
