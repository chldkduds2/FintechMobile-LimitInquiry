import React, { Suspense, lazy } from 'react';
import type { PropsWithChildren } from 'react';
import Footer from '../Footer/index';

const FintechMobalieLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex justify-center mt-10 contain-conten">
            <div className="max-w-[427px] font-sans">
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default FintechMobalieLayout;
