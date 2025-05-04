interface SpinnerProps {
    className?: string;
}

export default function Spinner({className}: SpinnerProps) {
    return (
        <div className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="30"
                    strokeDasharray="566"
                    strokeDashoffset="200"
                    strokeLinecap="round"
                    transform="rotate(45 100 100)"
                >
                    <animateTransform 
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="1s"
                    repeatCount="indefinite"
                    />

                    <animate 
                    attributeName="stroke-dashoffset"
                    values="200;500;200"
                    dur="2s"
                    repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </div>
    );
}