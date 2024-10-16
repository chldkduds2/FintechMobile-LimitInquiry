const FaClock = ({ color, bg }: { color: string; bg: string }) => {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_13117_3148)">
                <path
                    d="M7.50146 13.7515C10.9532 13.7515 13.7515 10.9532 13.7515 7.50146C13.7515 4.04969 10.9532 1.25146 7.50146 1.25146C4.04969 1.25146 1.25146 4.04969 1.25146 7.50146C1.25146 10.9532 4.04969 13.7515 7.50146 13.7515Z"
                    fill={bg}
                    stroke={color}
                ></path>
                <path
                    d="M7.50146 5.01367V7.51367L9.00146 9.01367"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_13117_3148">
                    <rect width="14" height="14" fill="white" transform="translate(0.501465 0.501465)"></rect>
                </clipPath>
            </defs>
        </svg>
    );
};

export default FaClock;
