interface IStar extends React.SVGProps<SVGSVGElement> {
    size?: string; // Size can be a string, e.g., "40px"
    fill?: string;
    className?: string;
    style?: React.CSSProperties; // Allow inline styles
};


const FourSidedStar = ({ size = "40px", fill = "white", className = "" ,...rest}: IStar) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            {...rest}
        >
            <path
                d="M405.575 12.675L482.475 282.875C484.175 288.675 488.775 293.275 494.575 294.975L764.775 371.875C781.675 376.675 781.675 400.775 764.775 405.575L494.575 482.475C488.775 484.175 484.175 488.775 482.475 494.575L405.575 764.775C400.775 781.775 376.675 781.775 371.875 764.775L294.975 494.575C293.275 488.775 288.675 484.175 282.875 482.475L12.675 405.575C-4.225 400.775 -4.225 376.675 12.675 371.875L282.875 294.975C288.675 293.275 293.275 288.675 294.975 282.875L371.875 12.675C376.675 -4.225 400.775 -4.225 405.575 12.675Z"
                fill={fill}
            />
        </svg>
    );
};

export default FourSidedStar;
