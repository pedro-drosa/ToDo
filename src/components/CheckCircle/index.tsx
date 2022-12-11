interface CheckCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  finished?: boolean;
}

export function CheckCircle({
  size,
  finished = false,
  ...props
}: CheckCircleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="none" d="M0 0H256V256H0z" />
      {finished
        ? [
            <circle fill="#5e60ce" cx={128} cy={128} r={96} />,
            <path
              fill="none"
              stroke="#f2f2f2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
              d="M172 104L113.3 160 84 132"
            />,
            <circle
              cx={128}
              cy={128}
              r={96}
              fill="none"
              stroke="#5e60ce"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />,
          ]
        : [
            <circle fill="none" cx={128} cy={128} r={96} />,
            <path
              fill="none"
              stroke="#262626"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
              d="M172 104L113.3 160 84 132"
            />,
            <circle
              cx={128}
              cy={128}
              r={96}
              fill="none"
              stroke="#4ea8de"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />,
          ]}
    </svg>
  );
}
