import React, { PropsWithChildren } from 'react';

const FintechMobalieContentLayout = ({ children }: PropsWithChildren) => {
    return <div className="flex flex-col justify-center contain-conten pl-[1.48rem] pr-[1.48rem]">{children}</div>;
};

export default FintechMobalieContentLayout;
