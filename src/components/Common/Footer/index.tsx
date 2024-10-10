import React from 'react';
import { FootertermList } from '@/assets/Data/FooterTermList/index';
import ApprovedDataListClickContainer from './ApprovedDataListClickContainer/index';

const Footer = () => {
    return (
        <React.Fragment>
            <ApprovedDataListClickContainer />
            <div className="w-full h-2 bg-gray-99">
                <div className="pt-10 pb-20 pl-6 pr-6">
                    <div className="mb-3 text-14-medium text-uniqueGray-40 ">안내사항</div>
                    {FootertermList.map((term, index) => (
                        <ul className="ml-1 mt-1 flex list-outside list-['-'] flex-col gap-1" key={index}>
                            <li className="list-outside list-['-'] pl-[3px] text-12-medium text-uniqueGray-70 ">
                                {term}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};
export default Footer;
