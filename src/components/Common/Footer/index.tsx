import { FootertermList } from '@/assets/Data/FooterTermList/index';

const Footer = () => {
    return (
        <div className="w-full h-2 bg-gray-99">
            <div className="p-10">
                <div className="text-14-medium text-uniqueGray-40">안내사항</div>
                {FootertermList.map((term, index) => (
                    <ul className="ml-1 mt-1 flex list-outside list-['-'] flex-col gap-1" key={index}>
                        <li className="list-outside list-['-'] pl-[3px] text-12-medium text-uniqueGray-70">{term}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
};
export default Footer;
