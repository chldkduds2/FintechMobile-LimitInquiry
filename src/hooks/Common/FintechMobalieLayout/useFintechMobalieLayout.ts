import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { throttle } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectIsLoansTypeModalOpenState,
    selectNotApprovedLoansDataModalOpenState,
    selectCurrentPositionState,
    selectLoansFilterBarState,
} from '@/store/Selectors/index';
import { setCurrentPositionState } from '@/store/Slice/CurrentPositionStateSlice/reducer';

const useFintechMobalieLayout = () => {
    const dispatch = useDispatch();
    const isLoansTypeModalOpenState = useSelector(selectIsLoansTypeModalOpenState);
    const notApprovedLoansDataModalOpenState = useSelector(selectNotApprovedLoansDataModalOpenState);

    const scrollRef = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();
    const position = useSelector(selectCurrentPositionState);
    const loansFiterBarState = useSelector(selectLoansFilterBarState);

    const onScroll = throttle(() => {
        if (scrollRef.current) {
            dispatch(setCurrentPositionState(scrollRef.current.scrollTop));
        }
    }, 100);

    const scrollToTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            dispatch(setCurrentPositionState(0));
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', onScroll);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', onScroll);
            }
        };
    }, [scrollRef.current]);

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

    return {
        scrollRef,
        position,
        isModalOpen: isLoansTypeModalOpenState || notApprovedLoansDataModalOpenState,
        pathname,
        scrollToTop, // 스크롤 최상단으로 이동하는 함수 반환
    };
};

export default useFintechMobalieLayout;
