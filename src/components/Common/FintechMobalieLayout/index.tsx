import React, { Suspense, lazy } from 'react';
import type { PropsWithChildren } from 'react';
import Footer from '../Footer/index';

const FintechMobalieLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="grid mt-10 place-items-center">
            <div className="w-[400px] font-sans">
                {children}
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default FintechMobalieLayout;
