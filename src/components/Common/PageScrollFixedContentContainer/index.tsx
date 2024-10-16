import PageScrollIcon from '@/assets/image/pageScrollIcon';

const PageScrollfixedContentContainer = ({ pathname, scrollToTop }: { pathname: boolean; scrollToTop: () => void }) => {
    return (
        <div
            onClick={scrollToTop}
            className={`${pathname ? 'bottom-5' : 'bottom-30'} fixed right-5 z-50 mb-[env(safe-area-inset-bottom)] flex h-[38px] w-[38px] flex-col rounded-full bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.15)] opacity-100 transition-opacity duration-300 `}
            role="presentation"
        >
            <PageScrollIcon />
        </div>
    );
};
export default PageScrollfixedContentContainer;
